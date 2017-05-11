import React from "react";
import { Link } from 'react-router';

import Saved from "./children/Saved";
import Search from "./children/Search";
import Bubble from "./children/Bubble";

import helpers from "../utils/helpers.js";

class Main extends React.Component {
	// Get initial state
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			saved: [],
			savedUpdated: 0,
			savedArticleTitle: ""
		};
		this.updateSaved = this.updateSaved.bind(this);
	}

	// Force update this component and update child Saved 
	updateSaved(savedTitle) {
		var newRandom = Math.random()*20 + 1;
		console.log("State before update: " + this.state.savedUpdated);
		console.log("NewRandom: " + newRandom);
		console.log("TITLE IN MAIN" + savedTitle);
		this.setState({
			savedUpdated: newRandom,
			title: savedTitle
		});
	}

	// Render the component
	render() {
		// console.log("Saved updated state now: " + this.state.savedUpdated);
		return (
			<div className="container">
				<div className="jumbotron text-center">
					<ul className="articleLinks list-inline">
						<li><Link to="/">Search for Articles</Link></li>
						<li><Link to="/saved">Saved Articles</Link></li>
					</ul>
					<h1>NY Times Article Search</h1>
					<h3>Search for and annotate articles of interest!</h3>
				</div>
				<div className="container">
					<Bubble />
				</div>
				<div className="container row">
					<div className="col-xs-12">

						{this.props.children}
						
					</div>
				</div>
			</div>
		);
	}
};

module.exports = Main;