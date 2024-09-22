const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('magicNumber', {
    value: 72
});