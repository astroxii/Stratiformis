const { app, ipcMain } = require("electron");

function windowEvents(mainWindow)
{
    ipcMain.on("window:close", () => {app.exit(0);});
    ipcMain.on("window:maximize", () => {mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();});
    ipcMain.on("window:minimize", () => {mainWindow.minimize();});
}

module.exports = {windowEvents};