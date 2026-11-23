# PantoMix cPanel Deployment Guide (Node.js 22.23.5 + Phusion Passenger / LiteSpeed)

This guide covers building, packaging, uploading, diagnosing, and verifying **PantoMix** (Next.js 15 standalone + `/api/ai/*` server routes + Firebase Auth/Firestore) on cPanel shared hosting with **Node.js Selector**, **Phusion Passenger**, and **LiteSpeed**.

---

## 1. Target Runtime & Compatibility Summary

- **Target cPanel Node.js Version:** **`22.23.5`** (also compatible with `20.20.2`; `engines.node >= 20.0.0`).
- **Firebase SDK Version:** **`firebase@^12.19.0`**
  - *Why not `firebase@13.x`?* `firebase@13.0.0+` bumped core sub-packages (`@firebase/app`, `@firebase/auth`, `@firebase/firestore`) to `engines.node >= 24.12.0`, triggering `EBADENGINE` warnings on Node `22.23.5`. `firebase@^12.19.0` is the newest stable 12.x release and supports Node `>= 20.0.0` cleanly with zero engine warnings.
- **Portable Build Script:** `"build": "next build"` in `package.json` works natively in **Windows PowerShell**, CMD, macOS, and Linux (`next build` sets `NODE_ENV=production` internally).
- **Next.js Output Mode:** `output: "standalone"` in `next.config.ts`, with `images: { unoptimized: true }` (avoids native `sharp` binary issues on shared hosting).
- **Passenger / LiteSpeed Startup File:** `app.js` at the application root.
  - Why not `.next/standalone/server.js` directly? Next.js's generated `server.js` hardcodes `parseInt(process.env.PORT, 10) || 3000` and `hostname = '0.0.0.0'`, which can conflict when Phusion Passenger manages sockets (`typeof PhusionPassenger !== 'undefined'`) or when LiteSpeed `lsnode` injects a Unix socket path or port hook.
  - `app.js` loads `.env*` safely (without overriding cPanel env vars), forces `NODE_ENV=production`, preloads `.next/required-server-files.json`, configures `PhusionPassenger.configure({ autoInstall: false })`, and calls `server.listen('passenger')` or `server.listen(listenTarget)` cleanly.

---

## 2. Environment Variables & Firebase Setup

### Required in cPanel → Setup Node.js App → Environment Variables

| Variable | Required? | Scope | Value / Notes |
| --- | --- | --- | --- |
| `GEMINI_API_KEY` | **Yes** | Server-side only | Your Google Gemini API key (used only in `/api/ai/words`, `/api/ai/recommend`, `/api/ai/reaction`). **Never** prefix with `NEXT_PUBLIC_`. |
| `NODE_ENV` | **Yes** | Server-side | `production` |

> **Security Note:** Never upload `.env`, `.env.local`, or `.env.production` containing real secrets inside your ZIP archive if you already configure them in cPanel Node.js Selector Environment Variables. `scripts/prepare-cpanel.mjs` automatically excludes `.env*` files from `deploy-cpanel/`.

### Firebase Console Configuration (Required for Live Login)
Firebase Web SDK settings are compiled from `firebase-applet-config.json`:
- `projectId`: `ace-river-bvc14`
- `firestoreDatabaseId`: `ai-studio-mimemastera-85d4a1b0-69c2-4475-a1d3-ba8e6ddaffe6`
- `authDomain`: `ace-river-bvc14.firebaseapp.com`
- `oAuthClientId`: `621467625569-4q9l23lh7jat5pg2mtjp5pbhl5gn498s.apps.googleusercontent.com`

**Action Required in Firebase Console:**
1. Open [Firebase Console](https://console.firebase.google.com/) → project `ace-river-bvc14`.
2. Go to **Authentication → Settings → Authorized domains**.
3. Click **Add domain** and add **`game.dresmaeiliclinic.ir`**.
   - Without this, Google Sign-In (`signInWithPopup`) will fail with `auth/unauthorized-domain` on the live site.

### Optional / Android Capacitor Variables (Do Not Set on cPanel)
- `CAPACITOR_SERVER_URL=https://game.dresmaeiliclinic.ir/` is only used locally during `npx cap sync android`.
- `NEXT_PUBLIC_API_BASE_URL` should remain **unset** on cPanel so client fetches resolve directly to same-origin `/api/ai/*`.

---

## 3. Local Build & Packaging (Windows PowerShell)

Run these commands from the project root on **Windows PowerShell** (Node.js `22.23.5`):

```powershell
# 1. Clean deterministic install (verifies package.json + package-lock.json match with zero EBADENGINE warnings)
npm ci

# 2. TypeScript & ESLint checks
npm run typecheck
npm run lint

# 3. Build Next.js standalone + assemble deploy-cpanel/
npm run cpanel:package
```

`npm run cpanel:package` runs `next build` followed by `node scripts/prepare-cpanel.mjs`, producing a self-contained **`deploy-cpanel/`** directory.

### Package the Contents of `deploy-cpanel/` into a ZIP (Windows PowerShell)

Run this exact PowerShell command so the archive contains the **contents** of `deploy-cpanel/` at the ZIP root (NOT an extra `deploy-cpanel/` parent folder):

```powershell
Compress-Archive -Path .\deploy-cpanel\* -DestinationPath .\pantomix-cpanel.zip -Force
```

*(macOS / Linux equivalent: `cd deploy-cpanel && zip -r ../pantomix-cpanel.zip .` or `tar -czf ../pantomix-cpanel.tar.gz .`)*

> **Important Windows Note:** Make sure hidden dotfiles (especially `.next/`) are included in the ZIP. In PowerShell `Compress-Archive -Path .\deploy-cpanel\*` includes `.next` on PowerShell 7+, or verify by opening `pantomix-cpanel.zip` and confirming `.next\BUILD_ID` is visible inside! If using Windows PowerShell 5.1 where `*` can skip dot-folders in some versions, run:
> ```powershell
> Get-ChildItem -Path .\deploy-cpanel -Force | Compress-Archive -DestinationPath .\pantomix-cpanel.zip -Force
> ```
> Using `Get-ChildItem -Force` guarantees `.next/` is always archived in every PowerShell version.

---

## 4. Exact Files & Directories in the Upload Root

Your cPanel application root (`/home/<cpanel_user>/pantomix`) must contain these exact top-level items:

- `app.js` *(Phusion Passenger / LiteSpeed startup wrapper)*
- `package.json` *(runtime-only manifest; excludes `@capacitor/*` and `devDependencies`)*
- `server.js` *(Next.js standalone reference entrypoint)*
- `.next/` *(must contain `BUILD_ID`, `static/`, `server/`, `required-server-files.json`, `routes-manifest.json`, etc.)*
- `public/` *(images, fonts, PWA icons, `sw.js`)*
- `node_modules/` *(Next.js traced production dependencies)*

**Do NOT upload:** `android/`, `src/`, `.next-dev/`, `mobile-shell/`, `.git/`, `node_modules` from the root repo, or local `.env*` files.

---

## 5. cPanel Node.js Selector Configuration & Upload Steps

1. Open **cPanel → Software → Setup Node.js App** → **Create Application** (or edit your existing app).
2. Enter these exact settings:
   - **Node.js version:** `22.23.5`
   - **Application mode:** `Production`
   - **Application root:** `pantomix` *(resolves to `/home/<cpanel_user>/pantomix`)*
   - **Application URL:** `game.dresmaeiliclinic.ir` *(path `/`)*
   - **Application startup file:** `app.js`
3. Click **Create** (or **Save**).
4. Open **cPanel File Manager** (or SSH) and navigate to `/home/<cpanel_user>/pantomix`:
   - If cPanel created a placeholder `node_modules` symlink or old files inside `pantomix`, delete the empty `node_modules` symlink before extracting so the bundled `node_modules/` folder extracts cleanly without conflict.
   - Upload `pantomix-cpanel.zip` into `/home/<cpanel_user>/pantomix` and **Extract** it directly there.
   - Confirm `/home/<cpanel_user>/pantomix/app.js` and `/home/<cpanel_user>/pantomix/.next/BUILD_ID` exist directly inside `pantomix/`.
   - Delete `pantomix-cpanel.zip` after extraction to save disk space.
5. Return to **cPanel → Setup Node.js App → Edit Application → Environment Variables**:
   - Add `GEMINI_API_KEY` = `<your_real_gemini_api_key>`
   - Add `NODE_ENV` = `production`
6. Click **Save**, then click **Restart** (do **not** click *Run NPM Install* — `node_modules/` is already bundled).

---

## 6. SSH Diagnostics, Logs & Troubleshooting

If the site shows **503 Service Unavailable**, **500 Internal Server Error**, or fails to boot, connect via SSH and run:

### A. Verify Directory Structure & Runtime Version
```bash
cd ~/pantomix
ls -la
ls -la .next/
cat .next/BUILD_ID
# Activate the cPanel Node 22 virtual environment (path may vary slightly by CloudLinux setup):
source ~/nodevenv/pantomix/22/bin/activate
node -v   # Should print v22.23.5
```

### B. Test Direct Boot Over SSH on a Free Port
```bash
cd ~/pantomix
PORT=3099 NODE_ENV=production node app.js
```
In a second SSH session (while the command above is running):
```bash
curl -i http://127.0.0.1:3099/
curl -sS -X POST http://127.0.0.1:3099/api/ai/reaction \
  -H "Content-Type: application/json" \
  -d '{"isSuccess":true,"score":20,"combo":2}'
```
Press `Ctrl+C` to stop the manual SSH test before restarting via cPanel UI.

### C. Check Phusion Passenger / LiteSpeed Logs
Common log locations on cPanel / CloudLinux / LiteSpeed servers:
- Application stderr log: `~/pantomix/stderr.log`
- User logs directory: `~/logs/` (e.g. `tail -n 100 ~/logs/*error* ~/pantomix/stderr.log 2>/dev/null`)
- CloudLinux Node.js Selector restart trigger via SSH:
  ```bash
  mkdir -p ~/pantomix/tmp
  touch ~/pantomix/tmp/restart.txt
  ```

### D. Common Issues & Fixes
| Symptom | Likely Cause | Fix |
| --- | --- | --- |
| `Missing Next.js production build` in logs | Archive had extra `deploy-cpanel/` parent folder OR `.next` dot-folder was skipped during ZIP | Move contents up into `~/pantomix/` and re-archive using `Get-ChildItem -Force` |
| `Cannot find module 'next'` | cPanel `node_modules` symlink replaced extracted `node_modules/` | Delete symlink (`rm -f ~/pantomix/node_modules`) and re-extract `node_modules/` |
| `auth/unauthorized-domain` on Google Sign-In | `game.dresmaeiliclinic.ir` missing in Firebase Console | Add `game.dresmaeiliclinic.ir` in Firebase Auth → Settings → Authorized domains |
| AI endpoints return fallback text instead of live Gemini | `GEMINI_API_KEY` missing or unset in cPanel Environment Variables | Set `GEMINI_API_KEY` in cPanel Node.js Selector and click **Restart** |

---

## 7. Production Verification Commands (Post-Deployment)

After restarting the app in cPanel, run these checks against `https://game.dresmaeiliclinic.ir`:

1. **Homepage (`GET /`):**
   ```bash
   curl -i https://game.dresmaeiliclinic.ir/
   ```
   Expected: `HTTP/2 200` with `<title>PantoMix | پانتومیکس</title>`.

2. **Public Asset (`GET /pantomix_mascot.jpg`):**
   ```bash
   curl -I https://game.dresmaeiliclinic.ir/pantomix_mascot.jpg
   ```
   Expected: `HTTP/2 200` (`image/jpeg`).

3. **AI Reaction (`POST /api/ai/reaction`):**
   ```bash
   curl -sS -w "\nHTTP:%{http_code}\n" -X POST https://game.dresmaeiliclinic.ir/api/ai/reaction \
     -H "Content-Type: application/json" \
     -d '{"isSuccess":true,"score":20,"combo":2}'
   ```
   Expected: `HTTP:200` and `{"success":true,"reaction":"..."}`.

4. **AI Words (`POST /api/ai/words`):**
   ```bash
   curl -sS -w "\nHTTP:%{http_code}\n" -X POST https://game.dresmaeiliclinic.ir/api/ai/words \
     -H "Content-Type: application/json" \
     -d '{"topic":"سینما","count":3,"difficulty":"MEDIUM"}'
   ```
   Expected: `HTTP:200` and `{"success":true,"data":[...]}`.

5. **AI Recommend (`POST /api/ai/recommend`):**
   ```bash
   curl -sS -w "\nHTTP:%{http_code}\n" -X POST https://game.dresmaeiliclinic.ir/api/ai/recommend \
     -H "Content-Type: application/json" \
     -d '{"playerCount":4,"groupType":"FRIENDS","mood":"FUNNY","minutes":30}'
   ```
   Expected: `HTTP:200` and `{"success":true,"data":{...}}`.
