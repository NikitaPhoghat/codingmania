

var Twit = require('twit');
var config= require('./config');

console.log(config); // Printing config deatils for testing purpose
var T = new Twit(config);
var tweet= { status: '#coding#Node from node.js'}

//Updates the authenticating user’s current status(Tweeting).
T.post('statuses/update', tweet,tweeted)

function tweeted (err,data,response){
if(err){
	console.log("something went wrong");
}
else
	console.log("it worked");
}


