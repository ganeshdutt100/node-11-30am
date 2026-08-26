const fs = require("fs");
const path = require("path");

const targetFiles = path.join(__dirname, "files");
const newName = "Ganesh_";

fs.readdir(targetFiles, (err, file) => {
  if (err) console.error(err);
  console.log(file.length);

  file.forEach((f) => {
    const oldPath = path.join(targetFiles, f);
    console.log(oldPath);

    const newPath = path.join(targetFiles, `${newName}${f}`);
    console.log(newPath);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Rename Successfully");
      }
    });
  });
});
