// Include React
var React = require("react");
import Query from "./grandchildren/Query";
import Results from "./grandchildren/Results";

import helpers from "../../utils/helpers.js";

var Search = React.createClass({

  // Get initial state
  getInitialState: function() {
  	return{
  		searchTopic: "",
  		startYear: "",
  		endYear: "",
  		results: {}
  	}
  },

   // If the component updates
  componentDidUpdate: function(prevProps, prevState) {

    // If topic is new, run query
    if (this.state.searchTopic != "" && (prevState.searchTopic != this.state.searchTopic || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear)) {
	    helpers.runQuery(this.state.searchTopic, this.state.startYear, this.state.endYear).then(function(data) {
	      	if (data !== this.state.results) {
	        	// console.log("Data",data);
	        	this.setState({ results: data });
	      	}

		}.bind(this));
	}
  },

  // The function that sets state of this component using child component Query
  setSearchState: function(topic, startyear, endyear) {
  	this.setState({
  		searchTopic: topic,
  		startYear: startyear,
  		endYear: endyear
  	});
  },

  // Render Search component with Query and Results child components
  render: function() {
    return (
      	<div className="row">
			<Query setSearchState = {this.setSearchState} />
			<Results results = {this.state.results} />
		</div>
    );
  }
});

module.exports = Search;
