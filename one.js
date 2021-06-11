console.log("From renderer process 1");
const { BrowserWindow } = require("electron").remote;
const path = require("path");
const url = require("url");

const newWindowButton = document.getElementById("newWindowButton");

newWindowButton.addEventListener("click", () => {
  let winthree = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  winthree.loadURL(`file://${__dirname}/three.html`);
  winthree.webContents.openDevTools();
  winthree.on("closed", () => {
    win = null;
  });
});
