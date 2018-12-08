import { app, BrowserWindow } from "electron";
import * as path from "path";

let window: Electron.BrowserWindow;

function createWindow() {
    window = new BrowserWindow({
        height: 900,
        width: 1300,
    });
    window.loadFile(path.join(__dirname, "..", "index.html"));
    window.on("closed", () => {
        window = null;
    });
}
app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (window === null) {
        createWindow();
    }
});
