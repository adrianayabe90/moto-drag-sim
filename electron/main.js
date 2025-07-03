const { app, BrowserWindow } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: { nodeIntegration: true }
  });
  win.loadFile(path.join(__dirname, "../build/index.html"));
}
app.whenReady().then(createWindow);