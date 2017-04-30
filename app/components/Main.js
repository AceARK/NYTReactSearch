// Boiler plate code
var React = require("react");

var Main = React.createClass({
	
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		searchTerm: "",
	// 		startDate: "",
	// 		endDate: ""
	// 	};
	// },

	 render: function() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>NY Times Article Search</h1>
					<h3>Search for and annotate articles of interest!</h3>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Main;