# BraveChat

Cross-platform AI chat application built with React Native and Tauri.

## Prerequisites

- Node.js >= 22
- Rust (for desktop builds)
- Xcode (for iOS/macOS)
- Android Studio (for Android)

## Install Dependencies

```bash
npm install
```

## Build Instructions

### Android

```bash
npm run android
```

Requires Android Studio with SDK and an emulator or connected device.

### iOS

```bash
npm run ios
```

Requires Xcode and CocoaPods. Run `cd ios && pod install` first if needed.

### macOS

```bash
npm run tauri:build -- --target universal-apple-darwin
```

Produces a `.dmg` installer in `src-tauri/target/release/bundle/`.

### Windows

```bash
npm run tauri:build
```

Produces an `.msi` installer in `src-tauri/target/release/bundle/`.

### Linux

```bash
npm run tauri:build
```

Produces `.deb` and `.AppImage` packages in `src-tauri/target/release/bundle/`.

## Development

```bash
# Mobile
npm start          # Start Metro bundler

# Desktop
npm run tauri:dev  # Start Tauri dev server
```
