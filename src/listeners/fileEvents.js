const {ipcMain, dialog} = require("electron");
const path = require("path");
const fs = require("fs");

function fileEvents()
{
    let currentFile = null;
    const dir = path.join(require('os').homedir(), "Documents", "astral");
    
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
        const filePath = dialog.showOpenDialogSync({properties: ['openFile'], filters: [{name: "Text", extensions: ["txt"]}]});

        if(filePath)
        {
            const content = fs.readFileSync(filePath[0]).toString();
            const filename = path.basename(filePath[0]);
            currentFile = filePath[0];

            return {filename, content};
        }
        else
        {
            return {};
        }
    });

    ipcMain.handle("file:save", (e, {content}) =>
    {
        fs.writeFileSync(currentFile, content);
        const filename = path.basename(currentFile);

        return {filename, content};
    });
}

module.exports = {fileEvents};