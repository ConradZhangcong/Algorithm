const path = require("path");
const fs = require("fs");
/** 文件名替换 */

const resolvePath = (...filePath) => {
  if (!filePath) {
    filePath = [""];
  }
  return path.resolve(__dirname, "../", ...filePath);
};

fs.readdir(resolvePath(), (err, files) => {
  if (err) {
    console.error("获取文件夹失败");
  }
  const dirList = files.filter((file) => /\d+-\d+00/.test(file));

  dirList.forEach(async (dir) => {
    const filename = resolvePath(dir);
    const [beforeNumber, afterNumber] = filename.split("-");
    const newFilename = resolvePath(
      [beforeNumber, Number(afterNumber) - 1].join("-")
    );
    console.log(newFilename);
    fs.rename(filename, newFilename, (err) => {
      if (err) console.error(err);
    });
  });
});
