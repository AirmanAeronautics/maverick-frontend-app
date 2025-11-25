# Maverick Mobile App

A React Native mobile application UI developed from Figma design specifications. This app features a chat interface for aviation communication channels.

## Features

- **Chat Interface**: Beautiful chat UI with message bubbles, avatars, and timestamps
- **Status Bar**: Custom status bar with time, battery, WiFi, and signal indicators
- **Header**: Blurred header with channel information and navigation
- **Message Types**: Support for text messages and image messages
- **Input Bar**: Message input with attachment and voice recording options

## Design Source

This UI was developed from the Figma design:
[Channel & Groups Private Screen](https://www.figma.com/design/ZmlrZmv5D9uOTjGjaWo7Co/AIRMAN?node-id=1952-2808)

## Prerequisites

- Node.js (>= 16)
- React Native development environment set up
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

## Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS, install CocoaPods:
```bash
cd ios && pod install && cd ..
```

3. Install React Native Linear Gradient (if needed):
```bash
npm install react-native-linear-gradient
```

For iOS:
```bash
cd ios && pod install && cd ..
```

## Running the App

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

## Project Structure

```
Maverick/
├── App.tsx                          # Main app entry point
├── index.js                         # React Native registration
├── src/
│   └── screens/
│       └── ChannelGroupsPrivate.tsx # Main chat screen component
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── babel.config.js                  # Babel configuration
└── metro.config.js                  # Metro bundler configuration
```

## Components

### ChannelGroupsPrivate
The main chat screen component that displays:
- Status bar with system information
- Header with channel name and member count
- Scrollable message list
- Message input bar with attachment and voice options

## Styling

The component uses React Native's StyleSheet API with exact measurements and colors from the Figma design:
- Fonts: Helvetica Neue, SF Pro Text, Inter
- Colors: Matched to design specifications
- Spacing: Pixel-perfect measurements
- Shadows: Applied to message bubbles for depth

## Image Assets

All image assets are loaded from Figma's CDN. These URLs are valid for 7 days from generation. For production, you should:
1. Download the assets from Figma
2. Store them locally in your project
3. Update the image source paths

## Notes

- The component is designed for a 430px width screen (iPhone 14/15 Pro dimensions)
- All measurements are in pixels as specified in the Figma design
- The blur effect on the header is simulated using a semi-transparent overlay
- Linear gradient is used for the microphone button

## Development

To modify the design:
1. Update styles in `src/screens/ChannelGroupsPrivate.tsx`
2. Adjust component layout as needed
3. Test on both iOS and Android devices

## License

This project is part of the Maverick application suite.

