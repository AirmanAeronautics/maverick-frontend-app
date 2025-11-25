# Web Preview - Localhost Setup

## Quick Start

The web preview version is now set up! The development server should be running.

### Access the App

Open your browser and navigate to:
**http://localhost:3000**

The app will automatically open in your default browser.

## If the server isn't running:

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **The server will start on port 3000** (configured in `vite.config.ts`)

3. **Open your browser** and go to `http://localhost:3000`

## Features

- ✅ Exact Figma design replication
- ✅ Responsive mobile view (430px width)
- ✅ All images loaded from Figma CDN
- ✅ Interactive UI elements
- ✅ Scrollable message list
- ✅ Input field with buttons

## Files Created for Web Preview

- `index.html` - HTML entry point
- `src/main.tsx` - React entry point
- `src/App.tsx` - Main app component
- `src/App.css` - App-level styles
- `src/screens/ChannelGroupsPrivate.web.tsx` - Web version of the chat screen
- `src/screens/ChannelGroupsPrivate.css` - Styles for the chat screen
- `vite.config.ts` - Vite configuration

## Notes

- The web version uses standard HTML/CSS/React instead of React Native components
- All styling matches the Figma design exactly
- Images are loaded from Figma's CDN (valid for 7 days)
- The view is optimized for mobile dimensions (430px width)

## Troubleshooting

If you encounter any issues:

1. **Port 3000 already in use:**
   - Change the port in `vite.config.ts`
   - Or kill the process using port 3000

2. **Dependencies not installed:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Server not starting:**
   - Check Node.js version (should be >= 16)
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install --legacy-peer-deps`

