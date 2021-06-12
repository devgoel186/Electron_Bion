const fs = require("fs");
const path = require("path");
btnCreate = document.getElementById("btnCreate");
btnRead = document.getElementById("btnRead");
btnDelete = document.getElementById("btnDelete");
fileName = document.getElementById("fileName");
fileContents = document.getElementById("fileContents");

let pathName = path.join(
  __dirname,
  "../Files"
); /* This folder will be used for storage */

// CREATE FILE
btnCreate.addEventListener("click", () => {
  let file = path.join(pathName, fileName.value);
  let contents = fileContents.value;
  fs.writeFile(file, contents, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
});

// READ FILE
btnRead.addEventListener("click", () => {
  let file = path.join(pathName, fileName.value);
  fs.readFile(file, (err, data) => {
    if (err) {
      return console.log(err);
    }
    fileContents.value = data;
    console.log("The file was read!");
  });
});

// DELETE FILE
btnDelete.addEventListener("click", () => {
  let file = path.join(pathName, fileName.value);
  fs.unlink(file, (err) => {
    if (err) {
      return console.log(err);
    }
    fileName.value = "";
    fileContents.value = "";
    console.log("The file was deleted!");
  });
});
