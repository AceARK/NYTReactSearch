// Include React
var React = require("react");

var helpers = require("../../../utils/helpers.js");

var Results = React.createClass({

  getInitialState: function() {
    return {
      title: "",
      url: "",
      date: ""
    }
  },

  // On click of Save button, save article to db
  handleClick: function(article, event){
    // console.log("Save button clicked");
    console.log(article);
    // User helpers saveArticle function
    helpers.saveArticle(article.headline.main, article.pub_date, article.web_url).then(function(data){
          // if(data.errmsg)
          console.log(data);
          console.log("ARTICLE TITLE FROM RESULTS COMPONENT" + article.headline.main);
    }.bind(this));
  },

  // Render the component
  render: function() {
  	 // If no articles, render this
    if (!this.props.results.docs) {
      return (
        <div>
          <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="panel-title text-center">
                    Results
                </div>
              </div>
              <div className="panel-body">                  
                  Enter a search term above to get articles 
              </div>
          </div>
        </div>
      );
    } else { // Render top 5 articles from api results
      var articles = this.props.results.docs.map(function(article, index) {
        if(index < 5) {
          return (
            <div key={index} className="panel panel-primary">
              <div className="panel-heading">
                <div className="panel-title">
                    <h5>{article.headline.main}</h5>
                </div>
              </div>
              <div className="panel-body">                  
                  <p>Date published: {article.pub_date}</p>
                  <a href={article.web_url} target="_blank"><p>View full article</p></a>
                  <button className="btn btn-lg btn-success" onClick={this.handleClick.bind(this, article)}>Save Article</button>
              </div>
            </div>
          );
        }
       
      // Binding this to avoid handleClick of undefined error 
      }.bind(this));
    }

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="panel-title text-center">
                    Results
                </div>
              </div>
              <div className="panel-body">                  
                  {articles} 
              </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;