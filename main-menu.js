const {app, Menu} = require('electron')
const {showMessage,showSaveDialog} = require('./dialog.js')

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
                    click(){
                        showMessage(mainWindow); 
                    }
                 },
                 {
                    label:'Save Memory Usage Info' ,
                    click(){
                        showSaveDialog(mainWindow);
                    }
                 },
                 {
                    label:'Open File' ,
                    click(){
                        
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