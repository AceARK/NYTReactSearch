// Require Article model
var Article = require("../models/article.js");

// Export controller function
module.exports = function(app, io) {
	// Route to get saved articles
	app.get('/api/saved', function(req, res) {

	  Article.find({})
	    .exec(function(err, data){

	      if(err){
	        console.log(err);
	      }
	      else {
	        res.send(data);
	      }
	    })
	});

	// Route to save new article
	app.post('/api/saved', function(req, res){
	  var newArticle = new Article(req.body);

	  console.log(req.body);

	  newArticle.save(function(err, doc){
	    if(err){
	      res.send(err);
	    } else {
	      io.emit('broadcast', req.body.title);
	      res.send(doc._id);
	    }
	  });
	});

	// Route to delete an article from db
	app.delete('/api/saved/', function(req, res){

	  var id = req.param('_id');

	  Article.find({"_id": id}).remove().exec(function(err, data){
	    if(err){
	      console.log(err);
	    }
	    else {
	      res.send("Deleted");
	    }
	  });
	});


};