let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

console.log("This is for the Bonus Assignment", event);
	let operation = event.Operation;
	let result = null;
	
			switch(operation) {
		case "Add":
			result = event.Digit1 + event.Digit2;
			break;
		case "Subtract":
			result = event.Digit1 - event.Digit2;
			break;
			}
			
		event.Result = result;
	callback(null, event);
}