const { app, nativeTheme, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

function getSettings()
{
    ipcMain.handle("app:settings", () =>
    {
        let settings;
    
        try
        {
            settings = JSON.parse(fs.readFileSync("settings.json"));
        }
        catch
        {
            fs.writeFileSync("settings.json", JSON.stringify({language: null, theme: null, recentFiles: []}));
            settings = JSON.parse(fs.readFileSync("settings.json"));
        }

        return {language: settings.language || app.getLocale().toLowerCase(), theme: settings.theme || `${nativeTheme.shouldUseDarkColors ? "dark" : "light"}`, recentFiles: settings.recentFiles};
    });
}

module.exports = {getSettings};