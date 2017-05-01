// Include React
var React = require("react");

var Results = React.createClass({

  render: function() {
  	 // If no articles, render this HTML
    if (!this.props.results.docs) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Enter a search term above</em>
            </span>
          </h3>
        </li>
      );
    }
    return (
      <div className="row">
				<div className="panel panel-default">
					<div className="panel-heading">
						<div className="panel-title text-center">
							Results
						</div>
					</div>
					<div className="panel-body">
						
					</div>
				</div>
			</div>
    );
  }
});

module.exports = Results;