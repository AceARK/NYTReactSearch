// Include React
var React = require("react");

var Query = React.createClass({

  // Get initial state
  getInitialState: function() {
  	return {
  		searchTopic: "",
  		startYear: "",
  		endYear: ""
  	};
  },

  // Watch for changes to the input fields
  handleChange: function(event) {
  	var newState = {};
  	newState[event.target.id] = event.target.value;
  	this.setState(newState);
  },

  // Function to handle form submit
  handleSubmit: function(event) {
  	event.preventDefault();
  	// Set parent state
  	this.props.setSearchState(this.state.searchTopic, this.state.startYear, this.state.endYear);
  	this.setState({
  		searchTopic: "",
  		startYear: "",
  		endYear: ""
  	});
  },

  // Render the component
  render: function() {
    return (
		<div className="panel panel-primary">
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