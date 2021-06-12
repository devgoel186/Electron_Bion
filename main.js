const { Accelerator } = require("electron");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; // responsible for any UI related parts of our app
const path = require("path"); // to include paths in our project
const url = require("url");
const ipc = electron.ipcMain;
const dialog = electron.dialog;
const menu = electron.Menu;
const MenuItem = electron.MenuItem;
const globalShortcut = electron.globalShortcut;
const Tray = electron.Tray;
const iconPath = path.join(__dirname, "icons/chess_icon.jpg");

// let winone, wintwo;
let win, tray; /*dimensionWin, colorWin, framelessWin;*/
// let parentWin, childWin;

/* THE MAIN.JS FILE CREATES A MAIN PROCESS, WHICH RUNS
RENDERER PROCESSES, AND THESE PROCESSES DO NOT INTERFERE WITH ONE ANOTHER*/

const specifics = {
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
  },
};

function createWindow() {
  // <><><><><><><><><><><><><><><><><><><>
  /* ------- COMMIT 11-14 ------------ */
  /* FOR COMMIT 14 , i.e, TRAY MODULE, WE DON'T NEED BROWSER WINDOW */
  win = new BrowserWindow({
    ...specifics,
    show: false,
  });
  win.loadURL(`file://${__dirname}/html/shell.html`);
  win.on("ready-to-show", () => {
    win.show();
  });
  win.webContents.openDevTools();
  // <><><><><><><><><><><><><><><><><><><>
  /* ------- COMMIT 8-9 ------------ */
  // win = new BrowserWindow({
  //   ...specifics,
  //   show: false,
  // });
  // win.loadURL(`file://${__dirname}/html/ipc.html`);
  // win.on("ready-to-show", () => {
  //   win.show();
  // });
  // win.webContents.openDevTools();
  // <><><><><><><><><><><><><><><><><><><>
  /* ------- COMMIT 6-7 - QUOTE WIDGET ------- */
  // win = new BrowserWindow({
  //   ...specifics,
  //   height: 150,
  //   width: 500,
  //   frame: false,
  //   show: false,
  // });
  // win.loadURL(`file://${__dirname}/html/quote.html`);
  // win.on("ready-to-show", () => {
  //   win.show();
  // });
  // <><><><><><><><><><><><><><><><><><><>
  /* ------- COMMIT 5 ------- */
  // parentWin = new BrowserWindow({
  //   ...specifics,
  //   modal: true,
  //   title: "Parent",
  // });
  // childWin = new BrowserWindow({
  //   ...specifics,
  //   parent: parentWin,
  //   title: "Child",
  //   modal: true,
  //   show: false,
  // }); // the child window always remains on top of the parent window
  // childWin.loadURL("https://dev-goel.netlify.app/");
  // childWin.once("ready-to-show", () => {
  //   childWin.show();
  // });
  // <><><><><><><><><><><><><><><><><><><>
  /* ------ COMMIT 4 -------- */
  // win = new BrowserWindow({
  //   ...specifics,
  // });
  // dimensionWin = new BrowserWindow({
  //   ...specifics,
  //   width: 400,
  //   height: 400,
  //   maxWidth: 600,
  //   maxHeight: 600,
  // });
  // colorWin = new BrowserWindow({
  //   webPreferences: {
  //     nodeIntegration: true,
  //     contextIsolation: false,
  //   },
  //   backgroundColor: "#228b22",
  // });
  // framelessWin = new BrowserWindow({
  //   ...specifics,
  //   backgroundColor: "#800000",
  //   frame: false,
  // });
  // <><><><><><><><><><><><><><><><><><><>
  /* ------ COMMIT 1-3 ------*/
  // winone = new BrowserWindow({
  //   webPreferences: {
  //     nodeIntegration: true,
  //     contextIsolation: false,
  //     enableRemoteModule: true, // since we are enabling a remote module from this renderer,
  //     //  we set enableRemoteModule as true
  //   },
  // });
  // wintwo = new BrowserWindow({
  //   ...specifics,
  // });
  // winone.loadURL(`file://${__dirname}/html/one.html`);
  // wintwo.loadURL(`file://${__dirname}/html/two.html`);
  // winone.webContents.openDevTools();
  // wintwo.webContents.openDevTools();
  // winone.on("closed", () => {
  //   win = null;
  // });
  // wintwo.on("closed", () => {
  //   win = null;
  // });
}

ipc.on("open-error-dialog", (event, arg) => {
  dialog.showErrorBox("Error", "Demo Error Message!");
  event.sender.send("opened-error-dialog", "Main Process opened Error dialog");
});

ipc.on("async-message", (event, arg) => {
  // dialog.showErrorBox("Error", "Demo Error Message!");
  event.sender.send("async-reply", "Main Process opened Error dialog");
});

ipc.on("sync-message", (event, arg) => {
  // dialog.showErrorBox("Error", "Demo Error Message!");
  event.returnValue = "sync-reply";
});

app.on("ready", () => {
  createWindow();
  tray = new Tray(iconPath);

  /* ------- TEMPLATE 1 - FOR IN APP CONTEXT MENU ------ */
  // const template = [
  //   {
  //     label: "Demo",
  //     submenu: [
  //       {
  //         label: "Submenu 1",
  //         click: () => {
  //           console.log("Clicked Submenu 1");
  //         },
  //       },
  //       {
  //         type: "separator",
  //       },
  //       {
  //         label: "Submenu 2",
  //         click: () => {
  //           console.log("Clicked Submenu 2");
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     label: "Help",
  //     submenu: [
  //       {
  //         label: "About Electron.js",
  //         click: () => {
  //           electron.shell.openExternal("https://www.electronjs.org/");
  //         },
  //         accelerator: "CommandOrControl + Shift + H",
  //       },
  //     ],
  //   },
  // ];

  /* ----------- TEMPLATE 2 - FOR TRAY CONTEXT MENU ------ */
  const templateTrayMenu = [
    {
      label: "Audio",
      submenu: [
        {
          label: "Low",
          type: "radio",
          checked: true,
        },
        {
          label: "High",
          type: "radio",
        },
      ],
    },
    {
      label: "Video",
      submenu: [
        {
          label: "1280x720",
          type: "radio",
          checked: true,
        },
        {
          label: "1920x1080",
          type: "radio",
        },
      ],
    },
  ];

  /* --------- IN - APP MENU -------- */
  // const appmenu = menu.buildFromTemplate(template);
  // menu.setApplicationMenu(appmenu);

  /* --------- CONTEXT MENUS -------- */
  /* We are creating a context menu and appending items to it */

  /* --------- CONTEXT MENU - 1 ---- FOR IN APP  ------*/
  // const contextmenu = new menu();
  // contextmenu.append(
  //   new MenuItem({
  //     label: "Hello",
  //     click: () => {
  //       console.log("Context Menu Item Clicked");
  //     },
  //   })
  // );
  // contextmenu.append(
  //   new MenuItem({
  //     role: "selectAll" /* Default roles like these for very common operations
  //                           exist in electron. We can use these use 'role' keyword */,
  //   })
  // );
  // win.webContents.on("context-menu", (event, params) => {
  //   contextmenu.popup(win, params.x, params.y);
  // });

  /* ----------- CONTEXT MENU - 2 ----- FOR TRAY MENU ---- */

  const contextMenuTray = menu.buildFromTemplate(templateTrayMenu);
  tray.setContextMenu(contextMenuTray);
  tray.setToolTip("Electron-Test");
  tray.setTitle("Electron");

  /* Global shortcuts can be activated even if window is not in focus */
  globalShortcut.register("Alt + 1", () => {
    win.show();
  });
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
/* Ideally, you must unregister all global shortcuts */
/* Only those shortcuts can be unregistered which were registered 
through global shortcuts module */
