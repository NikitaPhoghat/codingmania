
var Twit = require('twit');
var config= require('./config');
console.log(config);
var T = new Twit(config); // Printing config deatils for debugging purpose

//Returns a collection of relevant Tweets matching a specified query(Rainbow).

var param={ q: 'Rainbow', count:20}
T.get('search/tweets', param, callback);

function callback(err, data, response) {
	console.log(data);
if(data!='' && data!=null){
var tweets= data.statuses;
	for (var i =0; i <tweets.length; i++) {
	console.log(tweets[i].text);
}}else{
console.log(data);
}

}



