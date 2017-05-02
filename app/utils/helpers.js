// Include axios
var axios = require("axios");

// API key
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions to make API calls
var helpers = {

	// Fetch results from API
	runQuery: function(topic, startyear, endyear) {
		console.log(topic + startyear + endyear);

		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic;
 		var queryURL = queryURLBase + "&begin_date=" + startyear + "0101" + "&end_date=" + endyear + "0101";
  		 return axios.get(queryURL).then(function(results){
      		console.log("API runQuery results", results.data.response);

      		return results.data.response;

    	});

	},

	// Save to database
	 getSavedArticles: function(){
	    return axios.get('/api/saved')
	      .then(function(results){
	        console.log("saved article results", results);
	        return results;
	      })
	  },

	  saveArticle: function(title, date, url){

	    var newArticle = {title: title, date: date, url: url};
	    return axios.post('/api/saved', newArticle)
	      .then(function(results){
	        console.log(results.data);
	        return results.data;
	      })

	  },

	  deleteSavedArticle: function(id){

	    return axios.delete('/api/saved', {
	      params: {
	          '_id': id,
	      }
	    })
	    .then(function(results){
	      console.log("axios results", results);
	      return results;
	    })
	  }

}

module.exports = helpers;