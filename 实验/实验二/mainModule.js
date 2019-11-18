var circleModule = require("./circleModule.js");
var r=process.argv[2];
var circleObj=circleModule.circleFun(r);
console.log("圆的周长"+circleObj.circumference());
console.log("圆的面积"+circleObj.area());

/*
*1.原生模块，随node安装就存在
*2.自定义模块
*3.第三方模块
*/
