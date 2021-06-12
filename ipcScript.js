const electron = require("electron");
const ipc = electron.ipcRenderer;

const errorButton = document.getElementById("errorBtn");

errorBtn.addEventListener("click", () => {
  ipc.send("open-error-dialog");
});

ipc.on("opened-error-dialog", (event, arg) => {
  console.log("Event:", event, "\nArg", arg);
});
