const [app,BrowserWindow] = require('electrone');

function createWindow(){
    const win = new BrowserWindow({
        width: 600,
        height : 600,
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);