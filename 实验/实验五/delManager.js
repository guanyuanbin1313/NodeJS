const fs = require("fs");

var fileName = process.argv[2];
var pathName = parh.jion(__dirname, fileName);
if (fs.exisSync(pathName)) {
    var statObj=fs.statSync(pathName);
    if(statObj.ifFile()){
        fs.unlinkSync(pathName);
    }
    else{
        deDir(pathName);
    }
} else {
    console.log("not exist")
}

function deDir(pathName){
    var files=fs.readdirSync(pathName);
    for(var i=0;i<files.length;i++){
        var pathName1=path.jion(pathName,file[i]);
        var statObj=fs.statSync(pathName1);
        if(statObj.ifFile()){
            fs.unlinkSync(pathName1);
        }
        else if(statObj.isDirectory){
            deDir(pathName1);
        }
    }
    fs.rmdirSync(pathName);
}