Basic twitterbot App
Simple way to build TwitterBot using Nodejs,NPM and modules.

Installation 
npm install twit

Dependencies
It primarily uses:twit

needs an object containing the configuration for the twitter
module.exports={
  consumer_key:         
  consumer_secret:      
  access_token:         
  access_token_secret:  
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}