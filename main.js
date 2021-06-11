const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; // responsible for any UI related parts of our app
const path = require("path"); // to include paths in our project
const url = require("url");

// let winone, wintwo;
let win, dimensionWin, colorWin, framelessWin;

/* THE MAIN.JS FILE CREATES A MAIN PROCESS, WHICH RUNS
RENDERER PROCESSES, AND THESE PROCESSES DO NOT INTERFERE WITH ONE ANOTHER*/

function createWindow() {
  /* ------ COMMIT 4-PRESENT -------- */

  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  dimensionWin = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 400,
    height: 400,
    maxWidth: 600,
    maxHeight: 600,
  });

  colorWin = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    backgroundColor: "#228b22",
  });

  framelessWin = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    backgroundColor: "#800000",
    frame: false,
  });

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
  //   webPreferences: {
  //     nodeIntegration: true,
  //     contextIsolation: false,
  //   },
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
