// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

console.log("**********************************");

// Require Article Schema
var Article = require("./models/article.js");

// Create Instance of Express
let app = express();

// var server = require('http').createServer(app);  
// var io = require('socket.io').listen(server);
// Set port
const port = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Serve all static files in public folder
app.use(express.static("./public"));

// -------------------------------------------------

// Database configuration with mongoose on production or dev environment
if(process.env.MONGODB_URI) {
	console.log("Attempting to connect to MLAB");
 	mongoose.connect("mongodb://heroku_fl8r4965:evunrm7ajblrk1dh57q3muc189@ds125481.mlab.com:25481/heroku_fl8r4965");

}else {
   mongoose.connect("mongodb://localhost/nytreact");
}
// Assign the connection to db
let db = mongoose.connection;
// If error in connecting,
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
// Once connected,
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// ------------------------------------

// io.on('connection', function(socket) {
// 	console.log('a user connected');
// 	io.emit('connect message', "a user connected");
// 	socket.on('disconnect', function(){
//     	console.log('user disconnected');
//     	io.emit('connect message', "a user disconnected");
//   	});
//   	socket.on('announcement', function(msg){
//     	io.emit('announcement', msg);
//   });
//   	socket.on('connect message', function(msg){
//     	io.emit('connect message', msg);
//   });
// });

// http.listen(3000, function() {
// 	console.log("listening on port " + 3000);
// });

// Requiring article-controller
require("./controllers/article-controller.js")(app);

// Listening on port
app.listen(port, function() {
	console.log("Listening on " + port);
});