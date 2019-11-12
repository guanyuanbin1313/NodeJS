const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');



http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    switch (urlObj.pathname) {
        case '/':
            showLogin(res);
            break;
        case '/login':
            loginIn(req, res);
            break;
    }
}).listen(8081);
console.log('server is listening 8081');


function showLogin(res) {
    var filePath = path.join(__dirname, "login.html");
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(fileContent);
}


function loginIn(req, res) {
    //post提交表单应该怎么接收数据，on
    var formData = "";
    req.on('data', function (chunk) {
        formData += chunk;
    });
    req.on('end', function () {
        // console.log(formDate);
        var formObj = querystring.parse(formData);
        if (formObj.username == 'zhangsan' && formObj.pwd == '123') {
            var cookie = req.headers['cookie'];
            cookie = querystring.parse(cookie);
            if (cookie.logincount == null) {
                res.setHeader('Set-Cookie', 'logincount=1');
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end("这是你第1次登录")
            }else{
                cookie.logincount++;
                res.setHeader('Set-Cookie', 'logincount='+cookie.logincount);
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end("这是你第" + cookie.logincount+"次登录")
            }

        } else {
            res.setHeader('Content-Type', 'text/plain;charset=utf-8');
            res.end("用户名、密码错误")
        }
    });
}



/*function showHome(req, res) {
    var cookie = req.headers['cookie'];
    if (cookie == undefined) {
        showLogin(res);
    } else if (cookie.indexOf("username=") >= 0) {
        res.end('home page')
    } else {
        showLogin(res);
    }
}*/