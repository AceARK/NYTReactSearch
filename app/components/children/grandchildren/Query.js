// Include React
var React = require("react");

var Query = React.createClass({

  handleSubmit: function(event) {
  	event.preventDefault();
  	// Perform a call to helpers function runQuery, .then (), display Results with articles limit 5 
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
				<form>
					<div className="form-group">
						<h4><strong>Topic</strong></h4>
						<input type="text" className="form-control" id="search" required="" />
						<h4><strong>Start Year</strong></h4>
						<input type="number" className="form-control" id="start" required="" />
						<h4><strong>End Year</strong></h4>
						<input type="number" className="form-control" id="end" required="" />
					</div>
					<div className="text-center">
						<button type="submit" onClick={this.handleSubmit} className="btn btn-danger"><h4>Submit</h4></button>
					</div>
				</form>
			</div>
		</div>
    );
  }
});

module.exports = Query;