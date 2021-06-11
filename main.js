const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; // responsible for any UI related parts of our app
const path = require("path"); // to include paths in our project
const url = require("url");

let winone, wintwo;

/* THE MAIN.JS FILE CREATES A MAIN PROCESS, WHICH RUNS
RENDERER PROCESSES, AND THESE PROCESSES DO NOT INTERFERE WITH ONE ANOTHER*/

function createWindow() {
  winone = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true, // since we are enabling a remote module from this renderer,
      //  we set enableRemoteModule as true
    },
  });
  wintwo = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  winone.loadURL(`file://${__dirname}/one.html`);
  wintwo.loadURL(`file://${__dirname}/two.html`);

  winone.webContents.openDevTools();
  wintwo.webContents.openDevTools();

  winone.on("closed", () => {
    win = null;
  });
  wintwo.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
