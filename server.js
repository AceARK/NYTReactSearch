// Include Server Dependencies
import express from "express";
import bodyParser from  "body-parser";
import logger from  "morgan";
import mongoose from  "mongoose";

console.log("**********************************");

// Require Article Schema
import Article from  "./models/article.js";

// Create Instance of Express
let app = express();
// Set port
let port = process.env.PORT || 3000;

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

// Requiring article-controller
require("./controllers/article-controller.js")(app);

// Listening on port
app.listen(port, function() {
	console.log("Listening on " + port);
});