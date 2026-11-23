'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const { parse } = require('url');

// Load .env files if present without overriding env vars already injected by cPanel / Passenger
function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIdx = line.indexOf('=');
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    if (!key || Object.prototype.hasOwnProperty.call(process.env, key)) continue;
    let val = line.slice(eqIdx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    process.env[key] = val;
  }
}

loadEnvFile(path.join(__dirname, '.env.production'));
loadEnvFile(path.join(__dirname, '.env.local'));
loadEnvFile(path.join(__dirname, '.env'));

process.env.NODE_ENV = 'production';

// Support running both from the unpacked cPanel application root (__dirname contains .next)
// and directly from the repository root (.next/standalone)
const appDir = fs.existsSync(path.join(__dirname, '.next', 'BUILD_ID'))
  ? __dirname
  : path.join(__dirname, '.next', 'standalone');

if (!fs.existsSync(path.join(appDir, '.next', 'BUILD_ID'))) {
  console.error(
    `[PantoMix] Missing Next.js production build in "${path.join(appDir, '.next')}". Run "npm run cpanel:package" first.`
  );
  process.exit(1);
}

process.chdir(appDir);

// Load baked Next.js config from .next/required-server-files.json BEFORE requiring next
// so Next.js standalone mode skips webpack/config transpilation hooks.
let conf;
const requiredServerFilesPath = path.join(appDir, '.next', 'required-server-files.json');
if (fs.existsSync(requiredServerFilesPath)) {
  try {
    const requiredFiles = JSON.parse(fs.readFileSync(requiredServerFilesPath, 'utf8'));
    if (requiredFiles && requiredFiles.config) {
      conf = requiredFiles.config;
      process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(conf);
    }
  } catch (err) {
    console.warn('[PantoMix] Warning: Could not parse required-server-files.json:', err.message);
  }
}

const nextPath = require.resolve('next', { paths: [appDir, __dirname] });
const next = require(nextPath);

const isPassenger = typeof PhusionPassenger !== 'undefined';
if (isPassenger) {
  PhusionPassenger.configure({ autoInstall: false });
}

const rawPort = process.env.PORT;
const listenTarget = isPassenger
  ? 'passenger'
  : rawPort
    ? /^\d+$/.test(rawPort)
      ? Number(rawPort)
      : rawPort
    : 3000;

const app = next({
  dev: false,
  dir: appDir,
  ...(conf ? { conf } : {}),
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      const parsedUrl = parse(req.url || '/', true);
      handle(req, res, parsedUrl).catch((err) => {
        console.error('[PantoMix] Unhandled request error:', err);
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end('Internal Server Error');
        }
      });
    });

    server.on('error', (err) => {
      console.error('[PantoMix] Server error:', err);
      process.exit(1);
    });

    const onListening = () => {
      console.log(
        `[PantoMix] Server ready (${isPassenger ? 'Phusion Passenger' : `target=${listenTarget}`})`
      );
    };

    if (typeof listenTarget === 'number' && process.env.HOSTNAME) {
      server.listen(listenTarget, process.env.HOSTNAME, onListening);
    } else {
      // Omit hardcoded hostname so Phusion Passenger / LiteSpeed lsnode can intercept binding cleanly
      server.listen(listenTarget, onListening);
    }
  })
  .catch((err) => {
    console.error('[PantoMix] Failed to initialize Next.js server:', err);
    process.exit(1);
  });
