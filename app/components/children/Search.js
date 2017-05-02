// Include React
var React = require("react");
import Query from "./grandchildren/Query";
import Results from "./grandchildren/Results";

import helpers from "../../utils/helpers.js";

var Search = React.createClass({

  getInitialState: function() {
  	return{
  		searchTopic: "",
  		startYear: "",
  		endYear: "",
  		results: {}
  	}
  },

  updateSaved: function() {
  	this.props.updateSaved();
  },

   // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function(prevProps, prevState) {

    // Run the query for the address
    if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear)) {
	    helpers.runQuery(this.state.searchTopic, this.state.startYear, this.state.endYear).then(function(data) {
	      	if (data !== this.state.results) {
	        	console.log("Data",data);
	        	this.setState({ results: data });
	      	}

		}.bind(this));
	}
  },

  setSearchState: function(topic, startyear, endyear) {
  	this.setState({
  		searchTopic: topic,
  		startYear: startyear,
  		endYear: endyear
  	});
  },

  render: function() {
    return (
      	<div className="row">
			<Query setSearchState = {this.setSearchState} />
			<Results results = {this.state.results} updateSaved={this.updateSaved} />
		</div>
    );
  }
});

module.exports = Search;
