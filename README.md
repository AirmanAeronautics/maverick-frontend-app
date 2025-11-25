# Maverick Frontend - User Documentation

A React Native mobile application with web support, featuring a modern chat interface for aviation communication channels. This app provides a beautiful UI for messaging, channels, and group communications.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Screens](#available-screens)
- [Configuration](#configuration)
- [Development Guide](#development-guide)
- [Troubleshooting](#troubleshooting)
- [Building for Production](#building-for-production)

## Overview

The Maverick Frontend is a cross-platform application built with React Native that supports:
- **Mobile Platforms**: iOS and Android
- **Web Platform**: Browser-based preview using Vite

The application features a chat interface with support for:
- Direct messages
- Channel communications
- Group chats
- Message search
- Chat management (archive, mute, block, etc.)

## Features

### Core Features
- **Chat Interface**: Beautiful chat UI with message bubbles, avatars, and timestamps
- **All-in-One Chats**: Unified view for messages and channels
- **Status Bar**: Custom status bar with time, battery, WiFi, and signal indicators
- **Search Functionality**: Search for channels and messages
- **Chat Actions**: Long-press on chats to access actions (archive, mute, block, delete, etc.)
- **Responsive Design**: Optimized for mobile devices (430px width design)

### UI Components
- Custom status bar with system indicators
- Blurred background effects
- Linear gradients
- Interactive action panels
- Floating action buttons
- Tab navigation (Messages/Channels)

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js**: Version 16 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js (or use yarn)

### For Mobile Development

#### iOS Development
- **macOS**: Required for iOS development
- **Xcode**: Latest version from Mac App Store
- **CocoaPods**: Install via `sudo gem install cocoapods`
- **iOS Simulator**: Included with Xcode

#### Android Development
- **Android Studio**: Latest version ([Download](https://developer.android.com/studio))
- **Android SDK**: Install via Android Studio
- **Java Development Kit (JDK)**: Version 11 or higher
- **Android Emulator**: Set up via Android Studio

### For Web Development
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)
- **No additional setup required** - Vite handles everything

## Installation

### Step 1: Clone or Download the Project

If you have the project in a repository:
```bash
git clone <repository-url>
cd "Maverick Frontend"
```

Or navigate to the project directory if you already have it.

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

**Note**: If you encounter peer dependency issues, use:
```bash
npm install --legacy-peer-deps
```

### Step 3: Install Platform-Specific Dependencies

#### For iOS (macOS only):
```bash
cd ios
pod install
cd ..
```

#### For Android:
No additional steps required. Android dependencies are managed through npm.

### Step 4: Verify Installation

Check that all dependencies are installed correctly:
```bash
npm list --depth=0
```

## Running the Application

### Web Development (Recommended for Quick Testing)

The easiest way to preview and test the application is using the web version:

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Access the application**:
   - The app will automatically open in your default browser
   - Or manually navigate to: `http://localhost:3000`

3. **Stop the server**:
   - Press `Ctrl + C` in the terminal

**Features of Web Preview**:
- Fast hot-reload for development
- Easy debugging with browser DevTools
- No mobile device/emulator required
- Perfect for UI/UX testing

### Mobile Development

#### Running on iOS

**Prerequisites**: macOS with Xcode installed

1. **Start Metro Bundler** (in one terminal):
   ```bash
   npm start
   ```

2. **Run on iOS Simulator** (in another terminal):
   ```bash
   npm run ios
   ```

   Or specify a specific simulator:
   ```bash
   npm run ios -- --simulator="iPhone 15 Pro"
   ```

3. **Run on Physical Device**:
   - Connect your iPhone via USB
   - Trust the computer on your iPhone
   - Run: `npm run ios -- --device`

#### Running on Android

1. **Start Android Emulator**:
   - Open Android Studio
   - Launch AVD Manager
   - Start an emulator

2. **Start Metro Bundler** (in one terminal):
   ```bash
   npm start
   ```

3. **Run on Android** (in another terminal):
   ```bash
   npm run android
   ```

**Note**: Make sure you have an Android emulator running or a physical device connected via USB with USB debugging enabled.

### Development Commands Summary

| Command | Description |
|---------|-------------|
| `npm run dev` | Start web development server (Vite) |
| `npm run preview` | Preview production build for web |
| `npm start` | Start React Native Metro bundler |
| `npm run ios` | Run on iOS simulator/device |
| `npm run android` | Run on Android emulator/device |
| `npm test` | Run tests |
| `npm run lint` | Run ESLint |

## Project Structure

```
Maverick Frontend/
├── App.tsx                          # React Native entry point
├── index.js                         # React Native registration
├── app.json                         # App configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── babel.config.js                  # Babel configuration
├── metro.config.js                  # Metro bundler config
├── vite.config.ts                   # Vite configuration (web)
├── index.html                       # Web HTML entry point
│
├── src/
│   ├── App.tsx                      # Web app entry point
│   ├── App.css                      # Web app styles
│   ├── main.tsx                     # Web React entry point
│   │
│   ├── screens/
│   │   ├── AllInOneChats.tsx        # Mobile: All-in-One Chats screen
│   │   ├── AllInOneChats.web.tsx    # Web: All-in-One Chats screen
│   │   ├── AllInOneChats.css        # Styles for AllInOneChats
│   │   ├── ChannelGroupsPrivate.tsx # Mobile: Channel Groups screen
│   │   ├── ChannelGroupsPrivate.web.tsx # Web: Channel Groups screen
│   │   └── ChannelGroupsPrivate.css # Styles for ChannelGroupsPrivate
│   │
│   └── assets/
│       ├── channel Bg.png           # Background images
│       └── Chat Bg.png
│
├── public/                          # Public assets (web)
└── node_modules/                    # Dependencies (auto-generated)
```

## Available Screens

### 1. AllInOneChats
A unified chat interface that displays:
- List of all chats (messages and channels)
- Search functionality
- Tab navigation (Messages/Channels)
- Chat actions (long-press for options)
- Unread message badges
- Timestamps

**Access**: Main screen when app loads (web version)

### 2. ChannelGroupsPrivate
A detailed channel/group chat screen featuring:
- Status bar with system information
- Header with channel name and member count
- Scrollable message list
- Message input bar
- Attachment options
- Voice recording button

**Access**: Navigate from AllInOneChats screen

## Configuration

### Port Configuration

To change the web development server port, edit `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Change this to your preferred port
    open: true,
  },
});
```

### App Configuration

Edit `app.json` to change app name and display name:

```json
{
  "name": "Maverick",
  "displayName": "Maverick"
}
```

### TypeScript Configuration

TypeScript settings are in `tsconfig.json`. The project uses:
- React Native TypeScript preset
- Strict mode enabled
- ES2017+ features

## Development Guide

### Adding a New Screen

1. **Create the screen component** in `src/screens/`:
   ```typescript
   // MyNewScreen.tsx (for mobile)
   import React from 'react';
   import { View, Text } from 'react-native';
   
   const MyNewScreen = () => {
     return (
       <View>
         <Text>My New Screen</Text>
       </View>
     );
   };
   
   export default MyNewScreen;
   ```

2. **Create web version** (if needed):
   ```typescript
   // MyNewScreen.web.tsx
   import React from 'react';
   import './MyNewScreen.css';
   
   const MyNewScreen = () => {
     return (
       <div className="my-new-screen">
         <h1>My New Screen</h1>
       </div>
     );
   };
   
   export default MyNewScreen;
   ```

3. **Add navigation** in `App.tsx` or create a navigation system

### Styling Guidelines

- **Mobile**: Use React Native's `StyleSheet` API
- **Web**: Use CSS files with class names
- **Design Width**: 430px (iPhone 14/15 Pro dimensions)
- **Fonts**: Helvetica Neue, SF Pro Text, Inter
- **Colors**: Match Figma design specifications

### Image Assets

Currently, images are loaded from Figma's CDN. For production:

1. Download assets from Figma
2. Store in `src/assets/` or `public/`
3. Update image source paths in components

Example:
```typescript
// Before (Figma CDN)
const imgIcon = 'https://www.figma.com/api/mcp/asset/...';

// After (local asset)
const imgIcon = require('../assets/icon.png');
```

### Hot Reload

- **Web**: Automatic with Vite (instant updates)
- **Mobile**: 
  - Shake device/emulator to open Dev Menu
  - Enable "Fast Refresh" in Metro bundler
  - Press `r` in Metro terminal to reload

## Troubleshooting

### Common Issues

#### 1. Port Already in Use (Web)
**Error**: `Port 3000 is already in use`

**Solution**:
- Change port in `vite.config.ts`
- Or kill the process: 
  - Windows: `netstat -ano | findstr :3000` then `taskkill /PID <pid> /F`
  - Mac/Linux: `lsof -ti:3000 | xargs kill`

#### 2. Metro Bundler Issues
**Error**: Metro bundler won't start or cache issues

**Solution**:
```bash
# Clear Metro cache
npm start -- --reset-cache

# Or clear all caches
watchman watch-del-all
rm -rf node_modules
npm install
npm start -- --reset-cache
```

#### 3. iOS Build Failures
**Error**: CocoaPods or Xcode build errors

**Solution**:
```bash
cd ios
pod deintegrate
pod install
cd ..
npm run ios
```

#### 4. Android Build Failures
**Error**: Gradle or SDK issues

**Solution**:
- Check Android SDK is installed
- Verify `ANDROID_HOME` environment variable
- Clean build: `cd android && ./gradlew clean && cd ..`

#### 5. Dependency Issues
**Error**: Peer dependency warnings or conflicts

**Solution**:
```bash
npm install --legacy-peer-deps
```

#### 6. TypeScript Errors
**Error**: Type errors or missing types

**Solution**:
```bash
# Reinstall types
npm install --save-dev @types/react @types/react-native

# Check tsconfig.json configuration
```

#### 7. Image Loading Issues
**Error**: Images not displaying

**Solution**:
- Check image URLs (Figma CDN URLs expire after 7 days)
- Download and use local assets
- Verify image paths are correct

### Getting Help

If you encounter issues not covered here:

1. Check the [React Native Documentation](https://reactnative.dev/docs/getting-started)
2. Review [Vite Documentation](https://vitejs.dev/) for web issues
3. Check console/terminal for detailed error messages
4. Ensure all prerequisites are installed correctly

## Building for Production

### Web Production Build

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Preview production build**:
   ```bash
   npm run preview
   ```

3. **Deploy**: The `dist/` folder contains the production-ready files

### Mobile Production Build

#### iOS
```bash
# Build for iOS (requires macOS)
cd ios
xcodebuild -workspace Maverick.xcworkspace -scheme Maverick -configuration Release
```

#### Android
```bash
# Build APK
cd android
./gradlew assembleRelease

# Build AAB (for Play Store)
./gradlew bundleRelease
```

**Note**: Production builds require proper signing certificates and configuration.

## Additional Resources

- **React Native Docs**: https://reactnative.dev/
- **Vite Docs**: https://vitejs.dev/
- **TypeScript Docs**: https://www.typescriptlang.org/
- **Figma Design**: [Original Design Link](https://www.figma.com/design/ZmlrZmv5D9uOTjGjaWo7Co/AIRMAN?node-id=1952-2808)

## License

This project is part of the Maverick application suite.

---

**Need Help?** If you have questions or encounter issues, please refer to the troubleshooting section or check the project's issue tracker.
