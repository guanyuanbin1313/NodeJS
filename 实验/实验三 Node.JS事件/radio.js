const util = require("util");
const events = require("events");
const EventEmitter = events.EventEmitter;
var Radio = function () {

}
Radio.prototype.play = function () {
	console.log("'music radio' FM 106.7 opened");
	setTimeout(function () {
		console.log("lalala");
		Radio.prototype.stop();
	},2000);
}
Radio.prototype.stop = function () {
	console.log("'music radio' FM 106.7 closed");
}
util.inherits(Radio,EventEmitter);
module.exports = Radio;