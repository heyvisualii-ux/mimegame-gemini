# PantoMix Android Build, Firebase & Deployment Guide

This project is configured with **Capacitor 7** (`com.pantomix.app`, App Name: **PantoMix**) wrapping the Next.js 15 server-backed web application so that all gameplay, RTL Persian UI, Firestore sync, Google Sign-In, and server-side Gemini AI routes (`/api/ai/recommend`, `/api/ai/words`, `/api/ai/reaction`) remain fully operational.

---

## 1. Architecture & Server Origin

- **Package ID:** `com.pantomix.app`
- **App Name:** `PantoMix`
- **Capacitor Version:** `7.x` (`@capacitor/core`, `@capacitor/cli`, `@capacitor/android`)
- **Production Origin URL (`CAPACITOR_SERVER_URL`):** Defaults to `https://game.dresmaeiliclinic.ir/` in `capacitor.config.ts` and `.env.example` (can be overridden via `CAPACITOR_SERVER_URL`).
  - `/api/ai/*` routes run server-side with `process.env.GEMINI_API_KEY` so the Gemini API key is never stored inside the Android APK.
  - `android/app/src/main/res/xml/network_security_config.xml` enforces HTTPS globally and allows HTTP fallback for `game.dresmaeiliclinic.ir`, `localhost`, and `10.0.2.2` if explicitly overridden during local testing.
- **Fallback Shell (`mobile-shell/index.html`):** Displayed automatically if the Android device cannot reach the server at startup, with a Persian retry button.

---

## 2. Prerequisites on Windows

1. **Node.js 20+ & npm**
2. **Java Development Kit (JDK 21)** — required by Capacitor 7 (`JavaVersion.VERSION_21` in `android/app/capacitor.build.gradle` and `@capacitor/android`). Android Studio Ladybug / Meerkat bundles JBR 21 by default (`File -> Settings -> Build, Execution, Deployment -> Build Tools -> Gradle -> Gradle JDK -> jbr-21`).
3. **Android Studio** with:
   - Android SDK Platform 35 (`compileSdkVersion = 35`, `targetSdkVersion = 35`, `minSdkVersion = 23`)
   - Android SDK Build-Tools (35.x)
   - Android SDK Platform-Tools (`adb`)

---

## 3. Firebase Android Setup & Google Sign-In

The existing Firebase project is preserved:
- **Firebase Project ID:** `ace-river-bvc14`
- **Firestore Database ID:** `ai-studio-mimemastera-85d4a1b0-69c2-4475-a1d3-ba8e6ddaffe6`
- **Web OAuth Client ID (used as `clientId` / `serverClientId`):** `621467625569-4q9l23lh7jat5pg2mtjp5pbhl5gn498s.apps.googleusercontent.com`

### Step A: Generate SHA-1 and SHA-256 Fingerprints

On Windows (from the project root):

```powershell
npm run android:signing-report:win
```
*(Or manually: `cd android && .\gradlew.bat signingReport`)*

Copy the **SHA1** and **SHA-256** fingerprints from `Variant: debug` (and later `Variant: release`).

### Step B: Register Android App in Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com/) and select project **`ace-river-bvc14`**.
2. Go to **Project Settings -> General -> Your apps -> Add app -> Android**.
3. Enter:
   - **Android package name:** `com.pantomix.app`
   - **App nickname:** `PantoMix Android`
   - **Debug signing certificate SHA-1:** paste the `SHA1` from `signingReport`
4. Click **Register app**, then also add your **SHA-256** under **SHA certificate fingerprints** in Firebase Console (Android apps require SHA-1/SHA-256 registered to avoid Google Sign-In `ApiException 10` / `DEVELOPER_ERROR`).
5. In **Authentication -> Sign-in method -> Google**, verify Google Sign-In is enabled and Web Client ID matches `621467625569-4q9l23lh7jat5pg2mtjp5pbhl5gn498s.apps.googleusercontent.com`.
6. Add `game.dresmaeiliclinic.ir` to **Authentication -> Settings -> Authorized domains**.

### Step C: Download and Install `google-services.json`

1. In Firebase Console -> **Project Settings -> Your apps -> `com.pantomix.app`**, click **Download `google-services.json`**.
2. Place the file at:
   ```
   android/app/google-services.json
   ```
3. `android/app/build.gradle` checks for `android/app/google-services.json` and automatically applies `com.google.gms.google-services`.

---

## 4. Building Debug & Release APKs on Windows

From the project root on Windows:

```powershell
# 1. Install dependencies
npm install

# 2. Sync Capacitor config, native plugins, icons & splash assets
npm run cap:sync

# 3. (Optional) Open Android project in Android Studio GUI
npm run cap:open
```

### Build Debug APK (Windows PowerShell / CMD)

```powershell
npm run android:debug:win
```
*(Or inside `android/`: `.\gradlew.bat assembleDebug`)*

Generated APK path:
```
android\app\build\outputs\apk\debug\app-debug.apk
```

You can rename/copy this file to `PantoMix.apk` or install directly via ADB / USB:
```powershell
adb install -r android\app\build\outputs\apk\debug\app-debug.apk
```

### Build Signed Release APK

1. Generate a release keystore (keep private, do not commit):
   ```powershell
   keytool -genkey -v -keystore android\pantomix-release.keystore -alias pantomix -keyalg RSA -keysize 2048 -validity 10000
   ```
2. Copy `android\keystore.properties.example` to `android\keystore.properties` and fill in your keystore credentials.
3. Add the release keystore's **SHA-1** and **SHA-256** (`keytool -list -v -keystore android\pantomix-release.keystore -alias pantomix`) to Firebase Console.
4. Run:
   ```powershell
   cd android
   .\gradlew.bat assembleRelease
   ```
   Output: `android\app\build\outputs\apk\release\app-release.apk`

---

## 5. Deploy Production Next.js Server (`https://game.dresmaeiliclinic.ir/`)

The Next.js app must be running at `https://game.dresmaeiliclinic.ir/` so that `/` and `/api/ai/recommend`, `/api/ai/words`, and `/api/ai/reaction` return `HTTP 200` instead of `404 Not Found`:

1. Set server environment variables:
   - `GEMINI_API_KEY=<your-gemini-api-key>`
   - `NODE_ENV=production`
2. Build and start the Next.js server:
   ```bash
   npm install
   npm run build
   npm run start
   ```
3. Point the reverse proxy for `game.dresmaeiliclinic.ir` (port `443` / `80`) to Next.js on port `3000`.
