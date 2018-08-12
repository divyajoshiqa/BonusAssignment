let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	console.log("Received request with payload", event);
	let operation = event.Operation;
	let result = null;
	switch(operation) {
		case "Code Executed Successfully":
			result = "I got the Bonus :)";
			break;
		case "Code Execution Failed":
			result = "Better try harder! No Bonus ;)";
			break;
	}
	event.Result = result;
	callback(null, event);
}