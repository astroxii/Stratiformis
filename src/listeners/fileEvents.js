const { ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");
const { File } = require("../objects/File");

function fileEvents()
{
    const dir = path.join(require('os').homedir(), "Documents", "Stratiformis");
    
    ipcMain.handle("file:create", () =>
    {
        // TODO
        return null;
    });

    ipcMain.handle("file:open", () =>
    {
        const filePath = dialog.showOpenDialogSync({properties: ["openFile"], filters: [{name: "Text", extensions: ["txt"]}]});

        if(filePath)
        {
            return new File(path.basename(filePath[0]), fs.readFileSync(filePath[0]).toString().replace(/\r/gi, ""), filePath[0]);
        }
        else
        {
            return null;
        }
    });

    ipcMain.handle("file:save", (e, file) =>
    {
        try
        {
            fs.writeFileSync(file.path, file.editedContent);
        }
        catch
        {
            return null;
        }

        return new File(path.basename(file.path), file.editedContent, file.path);
    });

    ipcMain.on("file:close", () =>
    {

    });
}

module.exports = {fileEvents};