# TestReactApp

Tap-to-change-color Expo (React Native) app. Tap anywhere on the screen to animate the background to a random color. The current hex code is shown centered, with black or white text chosen by the background's luminance so it stays readable.

## Stack

- Expo SDK 58 (managed workflow)
- TypeScript
- Expo Router (file-based routing, `src/app/` routes only)
- React Native Reanimated (250 ms color transition)
- expo-haptics (light haptic on tap)
- react-native-safe-area-context (safe areas)
- expo-status-bar (status bar style by background brightness)

## Folder structure

```
├── app.json              # Expo config (name, slug, package, bundleIdentifier, router origin, plugins)
├── eas.json              # EAS build profiles (development, preview APK, production)
├── babel.config.js       # Reanimated babel plugin (via app.json plugin)
├── package.json
├── tsconfig.json         # @/* alias -> ./src/*
├── .env.example          # Public env var names (EXPO_PUBLIC_*)
├── .gitignore
├── index.ts              # Expo Router root component
├── assets/               # icons, splash
├── src/
│   ├── app/              # routes ONLY (Expo Router)
│   │   ├── _layout.tsx   # root layout: SafeAreaView + StatusBar + Stack
│   │   └── index.tsx     # index route -> ColorScreen
│   ├── components/       # reusable UI (named exports, kebab-case, theme tokens)
│   │   └── hex-display.tsx
│   ├── screens/          # screen bodies rendered by routes
│   │   └── color-screen/
│   │       └── index.tsx # tap-to-change-color screen (Reanimated + haptics)
│   ├── constants.ts
│   └── theme.ts          # design tokens (colors, spacing, typography, radius, motion)
```

## Run commands

Start the dev server (Expo Go):

```powershell
npx expo start
```

If your phone can't connect to the dev server (e.g. on a different network), use tunnel:

```powershell
npx expo start --tunnel
```

Then scan the QR code with the Expo Go app on iOS or Android.

## Environment variables

Copy `.env.example` to `.env` and fill in your own values. Never commit `.env`.

Public variables are prefixed with `EXPO_PUBLIC_` and read at runtime via `process.env.EXPO_PUBLIC_*`.

From `.env.example`:

```
EXPO_PUBLIC_APP_NAME=TestReactApp
```

## EAS (configured only)

Build profiles are defined in `eas.json`: `development`, `preview` (Android APK), and `production`. The app identifier is `com.moshood.testreactapp` for both Android (`android.package`) and iOS (`ios.bundleIdentifier`). No EAS builds were run as part of this task.

## License

MIT