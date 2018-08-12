let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

console.log("This is for the Bonus Assignment", event);
	let operation = event.Operation;
	let result = null;
	
			result = event.Digit1 + event.Digit2;
			
		event.Result = result;
	callback(null,'Successfully executed');
}