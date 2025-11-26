# Quick Start Guide - Maverick Frontend

Get up and running with the Maverick Frontend in 5 minutes!

## 🚀 Fastest Way to Get Started (Web)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   - The app will automatically open at `http://localhost:3000`
   - Or manually navigate to that URL

That's it! You're now viewing the app in your browser. ✨

## 📱 Running on Mobile

### iOS (macOS only)

```bash
# Install iOS dependencies
cd ios && pod install && cd ..

# Run on simulator
npm run ios
```

### Android

```bash
# Make sure Android emulator is running
# Then run:
npm run android
```

## 🎯 What You'll See

- **All-in-One Chats Screen**: A unified view of all your messages and channels
- **Search**: Use the search bar to find channels
- **Chat Actions**: Long-press any chat to see options (archive, mute, block, etc.)
- **Tabs**: Switch between Messages and Channels

## 🛠️ Common Commands

| What you want to do | Command |
|---------------------|---------|
| Start web dev server | `npm run dev` |
| Start mobile bundler | `npm start` |
| Run on iOS | `npm run ios` |
| Run on Android | `npm run android` |
| Run tests | `npm test` |
| Check code style | `npm run lint` |

## ⚠️ Troubleshooting

**Port 3000 in use?**
- Change port in `vite.config.ts` or kill the process using that port

**Dependencies not installing?**
```bash
npm install --legacy-peer-deps
```

**Metro bundler issues?**
```bash
npm start -- --reset-cache
```

## 📚 Need More Details?

Check out the full [README.md](./README.md) for comprehensive documentation.

---

**Happy Coding! 🎉**









