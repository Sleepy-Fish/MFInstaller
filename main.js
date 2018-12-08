const electron = require('electron');
const images = require('./images');

let createWindow = () => {
    let win = new electron.BrowserWindow({ width: 800, height: 600 });
    let trayImage = images.tray();
    console.log(trayImage);
    let tray = new electron.Tray(trayImage);
    tray.setToolTip('This is my application.')
    const contextMenu = electron.Menu.buildFromTemplate([
        {label: 'Item1', type: 'radio'},
        {label: 'Item2', type: 'radio'},
        {label: 'Item3', type: 'radio', checked: true},
        {label: 'Item4', type: 'radio'}
    ])
    tray.setContextMenu(contextMenu)
    win.loadFile('index.html');
}
electron.app.on('ready',createWindow);