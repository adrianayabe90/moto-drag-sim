# Moto Drag Simulator

## Build Android APK (Offline)
```
npm install
npm run build
npx cap add android
npx cap sync
npx cap open android
```

## Build Windows/macOS app (Electron)
```
cd electron
npm install
npm run build
```

## TWA APK (Optional)
```
npm install -g @bubblewrap/cli
bubblewrap init --manifest ./twa/manifest.json
bubblewrap build
```