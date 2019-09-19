const fs = require("fs");
const path = require("path");
console.log("创建文件夹")
process.stdin.on("data", function (data) {
    var cmd = data.toString();
    var cmdArr = cmd.split(" ");
    switch (cmdArr[0]) {
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0, -2));
            break;
        case "touch":
            var filePath = path.jion(__dirname, "filedir/file.txt");
            fs.writeFileSync(filePath, "hello node");
            break;
        case "delete":
            var filePath = path.jion(__dirname, "filedir/file.txt");
            fs.unlinSync(filePath);
            break;
        default:
            console.log("something error");
            break;
    }
})