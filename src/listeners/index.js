const {windowEvents} = require("./windowEvents");
const {fileEvents} = require("./fileEvents");

function registerListeners(mainWindow)
{
    windowEvents(mainWindow);
    fileEvents();
}

module.exports = {registerListeners};