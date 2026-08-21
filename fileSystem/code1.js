const fs = require("fs");
// fs.readFile("task.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("data :  ", data);
// });

// try {
//   const data = fs.readFileSync("task.txt", "utf-8");
//   console.log("data :  ", data);
// } catch (err) {
//   console.error("Error: ", err);
// }

// try {
//   fs.writeFileSync("file1.txt", "hello node.js");
//   console.log("file created successfully  ");
// } catch (err) {
//   console.error("Error: ", err);
// }

// try {
//   fs.writeFileSync("file1.txt", "writeFileSync ");
//   console.log("file created successfully  ");
// } catch (err) {
//   console.error("Error: ", err);
// }

fs.appendFile("example.txt", " \n append File ", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file created successfully  ");
});
