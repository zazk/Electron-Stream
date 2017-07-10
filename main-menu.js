const {app, Menu} = require('electron')
const {showMessage,showSaveDialog,showOpenDialog} = require('./dialog.js')

module.exports = {
    setMainMenu
}

function setMainMenu(mainWindow){
    const template = [
         {
             label: app.getName(),
             submenu:[
                 {
                    label:'Say Hello' ,
                    accelerator:'CmdOrCtrl+H',
                    click(){
                        showMessage(mainWindow); 
                    }
                 },
                 {
                    label:'Save Memory Usage Info' ,
                    accelerator:'CmdOrCtrl+S',
                    click(){
                        showSaveDialog(mainWindow);
                    }
                 },
                 {
                    label:'Open File' ,
                    click(){
                        showOpenDialog(mainWindow);
                    }
                 },
                 {type:'separator'},
                 {role:'quit'}
             ]
         }
    ];
    const menu = Menu.buildFromTemplate( template );
    Menu.setApplicationMenu(menu);
}