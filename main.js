const electron = require('electron');

let createWindow = () => {
    let win = new electron.BrowserWindow({ width: 800, height: 600 });
    let tray = new electron.Tray('icons/tray.png');
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
electron.app.dock.setIcon('icons/dock.png');
electron.app.on('ready',createWindow);