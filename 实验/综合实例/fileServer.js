const http = require("http");
const fs = require("fs");
const url = require("url");
http.createServer(function (req, res) {
    var urlObj = url.parse(req, url);

    var pathName = urlObj.pathName;
    if (pathName == "/") {
        var fileContent = fs.readFileSync("素材//index.html");
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(fileContent);
        res.end();
    }

    else if(pathName=="/getdata"){
        var list=[{"name":"zhangsan","age":20}];
        var str=JSON.stringify(list);
        res.end(str);
    }
}).listen(8081);

console.log("server is listening 8081");