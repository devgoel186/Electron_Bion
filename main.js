const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; // responsible for any UI related parts of our app
const path = require("path"); // to include paths in our project
const url = require("url");

// let winone, wintwo;
let win; /*dimensionWin, colorWin, framelessWin;*/
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
  /* ------- COMMIT 6 - QUOTE WIDGET ------- */
  win = new BrowserWindow({
    specifics,
    height: 150,
    width: 500,
    frame: false,
  });

  win.loadURL(`file://${__dirname}/quote.html`);
  // <><><><><><><><><><><><><><><><><><><>
  /* ------- COMMIT 5 ------- */
  // parentWin = new BrowserWindow({
  //   specifics,
  //   modal: true,
  //   title: "Parent",
  // });
  // childWin = new BrowserWindow({
  //   specifics,
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
  //   specifics,
  // });
  // dimensionWin = new BrowserWindow({
  //   specifics,
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
  //   specifics,
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
  //   specifics,
  // });
  // winone.loadURL(`file://${__dirname}/one.html`);
  // wintwo.loadURL(`file://${__dirname}/two.html`);
  // winone.webContents.openDevTools();
  // wintwo.webContents.openDevTools();
  // winone.on("closed", () => {
  //   win = null;
  // });
  // wintwo.on("closed", () => {
  //   win = null;
  // });
}

app.on("ready", createWindow);
