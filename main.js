const {app, BrowserWindow, Menu, dialog, shell} = require('electron');

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 250,
    height: 600,
    title: 'Desktop Lava',
    transparent: true,
    alwaysOnTop: true,
    fullscreenable: false
  });
  window.loadURL('file://' + __dirname + '/index.html');
  menuSetup(window);
});

function menuSetup(window) {
  const menuTemplate = [
    {
      label: 'Desktop Lava',
      submenu: [
        {
          label: 'About',
          click: () => {
            dialog.showMessageBox(window, {
              type: 'info',
              title: 'About',
              message: 'Desktop Lava is built by Cassidy Williams',
              detail: 'You can find her on GitHub and Twitter as @cassidoo, or on her website cassidoo.co.'
            });
          }
        },
        {
          label: 'Contribute',
          click: () => {
            shell.openExternal('http://github.com/cassidoo/desktop-lava');
          }
        },
        {
          type: 'separator'
        }, {
          label: 'Quit',
          accelerator: 'CommandOrControl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}
