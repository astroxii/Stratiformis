const { BrowserWindow, app } = require("electron");
const path = require("path");

const options =
{
    center: true, resizable: true, 
    title: "Stratiformis", frame: false,
    webPreferences: {nodeIntegration: true, contextIsolation: true, enableRemoteModule: false, preload: path.join(__dirname, "preload.js")},
    backgroundColor: "#111", height: 600, width: 1000, minHeight: 400, minWidth: 400, icon: path.join(__dirname, "../public/images/icon.png")
}

const createWindow = () =>
{
    const win = new BrowserWindow(options);

    if(app.isPackaged) win.loadFile(path.join(__dirname, "/../../../public/index.html"));
    else win.loadURL("http://localhost:3000");
    win.setMenu(null);
    //win.webContents.openDevTools();

    return win;
}

module.exports = {createWindow};