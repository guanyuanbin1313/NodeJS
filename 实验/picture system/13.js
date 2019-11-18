const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;

    if (pathName == "/") {
        showIndex(res);
    }
}).listen(8081);

function showIndex(res) {
    var indexPath = path.join(__dirname, "/list.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200, {
        "content-type": "text/html"
    });
    res.end(fileContent);
}