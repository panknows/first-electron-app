const { app, BrowserWindow } = require('electron');
const path = require('node:path')

require('update-electron-app')()

const createWindow = () => {
    const window = new BrowserWindow({
        width: 400,
        height: 200,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();
});