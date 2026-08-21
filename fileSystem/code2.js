const fs = require("fs");
const { finished } = require("stream");

// const readStream = fs.createReadStream("task.txt", "utf-8");
//
// readStream.on("data", (chunk) => {
//   console.log("chunks  :  ", chunk);
// });
// readStream.on("end", () => {
//   console.log("finished");
// });
// readStream.on("error", (err) => {
//   console.log("Error : ", err);
// });

// const writeStream = fs.createWriteStream("file1.txt");
// writeStream.write("Code2 \n");
// writeStream.write("writeStream \n");
//
// writeStream.end();
//
// writeStream.on("finish", () => {
//   console.log("writing finished");
// });
//
// writeStream.on("error", (err) => {
//   console.log("Error : ", err);
// });

// const readStream = fs.createReadStream("task.txt");
// const writeStream = fs.createWriteStream("file1.txt");
//
// readStream.pipe(writeStream);
// console.log("copy");

// const data = fs.readFileSync("task.txt");
// console.log(data);
// console.log(data.toString());
