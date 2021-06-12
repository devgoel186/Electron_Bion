const shell = require("electron").shell;
const os = require("os");
const openButton = document.getElementById("openButton");
const username = os.userInfo().username;

openButton.addEventListener("click", () => {
  shell.openPath(`/home/${username}/Desktop/Electron-Project`);
});

openButton.addEventListener("dblclick", () => {
  shell.showItemInFolder(
    `/home/${username}/Desktop/Electron-Project/package.json`
  );
});
