const electron = require("electron");
const ipc = electron.ipcRenderer;

const errorButton = document.getElementById("errorBtn");
const asyncButton = document.getElementById("asyncBtn");
const syncButton = document.getElementById("syncBtn");

errorBtn.addEventListener("click", () => {
  ipc.send("open-error-dialog");
});

asyncButton.addEventListener("click", () => {
  console.log("async message 1");
  ipc.send("async-message");
  console.log("async message 2");
});

syncButton.addEventListener("click", () => {
  console.log("sync message 1");
  const reply = ipc.sendSync("sync-message");
  console.log(reply);
  console.log("sync message 2");
});

ipc.on("opened-error-dialog", (event, arg) => {
  console.log("Arg", arg);
});

ipc.on("async-reply", (event, arg) => {
  console.log("Arg", arg);
});
