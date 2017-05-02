// Include React
var React = require("react");

var Query = React.createClass({


  getInitialState: function() {
  	return {
  		searchTopic: "",
  		startYear: "",
  		endYear: ""
  	};
  },

  handleChange: function(event) {
  	var newState = {};
  	newState[event.target.id] = event.target.value;
  	this.setState(newState);
  },

  handleSubmit: function(event) {
  	event.preventDefault();
  	// Perform a call to helpers function runQuery, .then (), display Results with articles limit 5 
  	this.props.setSearchState(this.state.searchTopic, this.state.startYear, this.state.endYear);
  	this.setState({
  		searchTopic: "",
  		startYear: "",
  		endYear: ""
  	});
  },

  render: function() {
    return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<div className="panel-title text-center">
					Query
				</div>
			</div>
			<div className="panel-body">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<h4><strong>Topic</strong></h4>
						<input type="text" className="form-control" value={this.state.searchTopic} onChange={this.handleChange} id="searchTopic" required="" />
						<h4><strong>Start Year</strong></h4>
						<input type="number" className="form-control"  value={this.state.startYear} onChange={this.handleChange} id="startYear" required="" />
						<h4><strong>End Year</strong></h4>
						<input type="number" className="form-control"  value={this.state.endYear} onChange={this.handleChange} id="endYear" required="" />
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
					</div>
				</form>
			</div>
		</div>
    );
  }
});

module.exports = Query;