# BraveChat

Cross-platform AI chat application built with React Native and Tauri.

## Prerequisites

- Node.js >= 18
- Yarn
- Rust (for desktop builds)
- Xcode (for iOS/macOS)
- Android Studio (for Android)

## Install Dependencies

```bash
yarn install
```

## Build Instructions

### Android

```bash
yarn android
```

Requires Android Studio with SDK and an emulator or connected device.

### iOS

```bash
yarn ios
```

Requires Xcode and CocoaPods. Run `cd ios && pod install` first if needed.

### macOS

```bash
yarn tauri:build --target universal-apple-darwin
```

Produces a `.dmg` installer in `src-tauri/target/release/bundle/`.

### Windows

```bash
yarn tauri:build
```

Produces an `.msi` installer in `src-tauri/target/release/bundle/`.

### Linux

```bash
yarn tauri:build
```

Produces `.deb` and `.AppImage` packages in `src-tauri/target/release/bundle/`.

## Development

```bash
# Mobile
yarn start          # Start Metro bundler

# Desktop
yarn tauri:dev      # Start Tauri dev server
```
