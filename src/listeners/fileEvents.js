const {ipcMain, dialog} = require("electron");
const path = require("path");
const fs = require("fs");
const { File } = require("../objects/File");

function fileEvents()
{
    let currentFile = null;
    const dir = path.join(require('os').homedir(), "Documents", "Stratiformis");
    
    ipcMain.handle("file:create", () =>
    {
        let newFileName = "";
        let files = [];

        try
        {
            files = fs.readdirSync(dir);
        }
        catch
        {
            fs.mkdirSync(dir);
            files = fs.readdirSync(dir);
        }

        newFileName = `NewFile${files.filter((f) => {return f.includes("NewFile");}).length || ""}.txt`;
        fs.writeFileSync(path.join(dir, newFileName), "");
        currentFile = path.join(dir, newFileName);

        return {filename: newFileName, content: ""};
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
        fs.writeFileSync(file.path, file.editedContent);

        return new File(path.basename(file.path), file.editedContent, file.path);
    });

    ipcMain.on("file:close", () =>
    {
        currentFile = null;
    });
}

module.exports = {fileEvents};