const {app, BrowserWindow} = require("electron");
const {createWindow} = require("./src/window");
const {registerListeners} = require("./src/listeners");

let mainWindow;

app.setName("Stratiformis");
app.whenReady()
.then(() => 
{
    app.on('activate', () =>
    {
        if(BrowserWindow.getAllWindows().length === 0) {mainWindow = createWindow();}
    });
})
.then(() => {if(mainWindow) {registerListeners(mainWindow);}});
app.focus();