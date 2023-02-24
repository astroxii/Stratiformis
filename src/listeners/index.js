const { windowEvents } = require("./windowEvents");
const { fileEvents } = require("./fileEvents");
const { getSettings } = require("./getSettings");

function registerListeners(mainWindow)
{
    windowEvents(mainWindow);
    fileEvents();
    getSettings();
}

module.exports = {registerListeners};