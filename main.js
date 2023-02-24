const { app } = require("electron");
const { createWindow } = require("./src/window");
const { registerListeners } = require("./src/listeners");

let mainWindow;

app.setName("Stratiformis");
app.whenReady()
.then(() => 
{
    mainWindow = createWindow();
})
.then(() =>
{
    registerListeners(mainWindow);
});
app.focus();