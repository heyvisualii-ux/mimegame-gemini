import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const nextDir = path.join(rootDir, '.next');
const standaloneDir = path.join(nextDir, 'standalone');
const staticDir = path.join(nextDir, 'static');
const publicDir = path.join(rootDir, 'public');
const passengerEntry = path.join(rootDir, 'app.js');
const outputDir = path.join(rootDir, 'deploy-cpanel');

if (!fs.existsSync(path.join(standaloneDir, '.next', 'BUILD_ID'))) {
  console.error('Error: .next/standalone build not found. Run "npm run build" first.');
  process.exit(1);
}

if (!fs.existsSync(passengerEntry)) {
  console.error('Error: app.js entrypoint not found at project root.');
  process.exit(1);
}

console.log('[PantoMix] Preparing cPanel standalone bundle in deploy-cpanel/ ...');

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

// 1. Copy traced Next.js standalone runtime (.next/, node_modules/, server.js)
// Use dereference: true so symlinks in node_modules do not break Windows ZIP or cPanel extraction
fs.cpSync(standaloneDir, outputDir, {
  recursive: true,
  force: true,
  dereference: true,
});

// 2. Copy static assets (.next/static -> deploy-cpanel/.next/static)
if (fs.existsSync(staticDir)) {
  fs.cpSync(staticDir, path.join(outputDir, '.next', 'static'), {
    recursive: true,
    force: true,
    dereference: true,
  });
}

// 3. Copy public/ assets -> deploy-cpanel/public/
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, path.join(outputDir, 'public'), {
    recursive: true,
    force: true,
    dereference: true,
  });
}

// 4. Copy Phusion Passenger startup wrapper -> deploy-cpanel/app.js
fs.copyFileSync(passengerEntry, path.join(outputDir, 'app.js'));

// 5. Remove any non-production or sensitive files if Next.js standalone traced them
for (const unwanted of [
  '.env',
  '.env.local',
  '.env.production',
  '.env.development',
  '.next-dev',
  'android',
  'src',
  'mobile-shell',
  'bun.lock',
  'package-lock.json',
]) {
  const target = path.join(outputDir, unwanted);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

// 6. Write a clean runtime-only package.json (excludes @capacitor/* & devDependencies)
const rootPkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const runtimeDeps = {};
for (const dep of [
  '@google/genai',
  'firebase',
  'lucide-react',
  'next',
  'react',
  'react-dom',
  'canvas-confetti',
]) {
  if (rootPkg.dependencies?.[dep]) {
    runtimeDeps[dep] = rootPkg.dependencies[dep];
  }
}

const cpanelPkg = {
  name: rootPkg.name || 'pantomix',
  version: rootPkg.version || '1.0.0',
  private: true,
  main: 'app.js',
  engines: {
    node: '>=20.0.0',
  },
  scripts: {
    start: 'node app.js',
  },
  dependencies: runtimeDeps,
};

fs.writeFileSync(
  path.join(outputDir, 'package.json'),
  `${JSON.stringify(cpanelPkg, null, 2)}\n`,
  'utf8'
);

// 7. Verify required bundle artifacts exist
const requiredPaths = [
  'app.js',
  'package.json',
  'server.js',
  'node_modules',
  'public',
  path.join('.next', 'BUILD_ID'),
  path.join('.next', 'static'),
  path.join('.next', 'server'),
  path.join('.next', 'required-server-files.json'),
];

const missing = requiredPaths.filter((rel) => !fs.existsSync(path.join(outputDir, rel)));
if (missing.length > 0) {
  console.error('[PantoMix] Error: deploy-cpanel/ is missing required artifacts:', missing.join(', '));
  process.exit(1);
}

console.log('[PantoMix] cPanel bundle ready at: deploy-cpanel/');
console.log('  - Startup file: app.js');
console.log('  - Verified: .next/BUILD_ID, .next/static/, .next/server/, node_modules/, public/, server.js, package.json, app.js');
