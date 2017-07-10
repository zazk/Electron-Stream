const {app, BrowserWindow} = require('electron');
const path = require('path');
const { setMainMenu } = require('./main-menu.js')

let windows = [];

let mainWindow;
app.on('ready', ()=> {
    createWindow();
    createWindow();
});

function createWindow(){
    const win = new BrowserWindow({height:300,width:400});
    win.loadURL( path.join('file://', __dirname, 'index.html' ));
    windows.push(win); 

}

console.log( require('electron') );