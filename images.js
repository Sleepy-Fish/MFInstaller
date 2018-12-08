const {nativeImage} = require('electron');

module.exports = {
    tray: () =>{
        switch(process.platform){
            case 'darwin':
                console.log('OH BOY')
                return nativeImage.createFromPath('icons/tray.icns');
        }
        return nativeImage.createFromPath('icons/tray.png');
    }
}