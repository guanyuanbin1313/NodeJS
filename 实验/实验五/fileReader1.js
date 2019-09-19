const fs = require("fs");
const path = require("path");
const http = require("http");
var fileName = process.argv[2];

http.createServer(function (req, res) {
    if (fileName == undefined) {
        var str = "hello"
        fs.readFile(process.argv[1], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                str = data.toString();
                res.end(str);
            }[]
        })
    } else {
        var pathName = path.join(__dirname, fileName);
        if (fs.existsSync(pathName)) {
            fs.readFile(pathName, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    str = data.toString();
                    res.end(str);
                }
            })
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write("文件不存在");
            res.end();
        }
    }
}).listen(8081)

console.log("server is listening 8081")