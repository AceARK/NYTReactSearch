// Boiler plate code
import React from "react";
import Saved from "./children/Saved";
import Search from "./children/Search";

import helpers from "../utils/helpers.js";

class Main extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			saved: [],
			savedUpdated: 0
		};

		this.updateSaved = this.updateSaved.bind(this);
	}

	updateSaved() {
		var newRandom = Math.random()*20 + 1;
		console.log("State before update: " + this.state.savedUpdated);
		console.log("NewRandom: " + newRandom);
		this.setState({
			savedUpdated: newRandom
		});
	}

	render() {
		console.log("Saved updated state now: " + this.state.savedUpdated);
		return (
			<div className="container">
				<div className="jumbotron text-center">
					<h1>NY Times Article Search</h1>
					<h3>Search for and annotate articles of interest!</h3>
				</div>
				<div className="container row">
					<div className="col-xs-12">
						<Search updateSaved={this.updateSaved} />
						<Saved savedUpdated={this.state.savedUpdated} />
					</div>
				</div>
			</div>
		);
	}
};

module.exports = Main;