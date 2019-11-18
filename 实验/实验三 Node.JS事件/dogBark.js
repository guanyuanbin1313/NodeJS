var Dog = require("./Dog.js");
var dog1 = new Dog("teddy",8);
function barkFun() {
	console.log(this.name+"barked!");
	console.log(energy+this.energy);
}
dog1.on("bark",barkFun);
var intervalId =setInterval(function () {
	if(this.energy >=0)
		dog1.emit("bark");
	else
		clearInterval(intervalId);
	dog1.energy = dog1.energy-1;
},1000);