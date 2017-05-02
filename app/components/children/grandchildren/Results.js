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

  handleClick: function(article, event){
    console.log("Save button clicked");
    console.log(article);

    helpers.saveArticle(article.headline.main, article.pub_date, article.web_url).then(function(data){
        console.log(data);
        this.props.updateSaved();
    }.bind(this));
  },

  render: function() {
  	 // If no articles, render this HTML
    if (!this.props.results.docs) {
      return (
        <div>
          <h3>
            <span>
              <em>Enter a search term above to get articles</em>
            </span>
          </h3>
        </div>
      );
    } else {
      var articles = this.props.results.docs.map(function(article, index) {
        if(index < 5) {
          return (
            <div key={index} className="articleItem">

                <h3>{article.headline.main}</h3>
                <p>Date published: {article.pub_date}</p>
                <a href={article.web_url} target="_blank"><p>View full article</p></a>
                <button className="btn btn-lg btn-success" onClick={this.handleClick.bind(this, article)}>Save Article</button>
            </div>
          );
        }
        

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