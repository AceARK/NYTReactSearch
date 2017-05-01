// Boiler plate code
import React from "react";
import Saved from "./children/Saved";
import Search from "./children/Search";

class Main extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			startDate: "",
			endDate: ""
		};
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron text-center">
					<h1>NY Times Article Search</h1>
					<h3>Search for and annotate articles of interest!</h3>
				</div>
				<div className="container row">
					<div className="col-xs-12">
						<Search />
						<Saved />
					</div>
				</div>
			</div>
		);
	}
};

module.exports = Main;