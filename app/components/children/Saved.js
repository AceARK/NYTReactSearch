// Boiler plate code
import React from "react";

import helpers from "../../utils/helpers.js";

class Saved extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			saved: [],
			updated: 0
		};

		this.handleClick = this.handleClick.bind(this);
	}

	// Handle click of unsave button
	handleClick(article,event) {
		// console.log(article);

		helpers.deleteSavedArticle(article._id).then(function(response) {
			// console.log(response);
			this.setState({ updated: 1 });
		}.bind(this));
	}

	// Called once the component has mounted
	componentDidMount() {
		helpers.getSavedArticles().then(function(response) {
			// console.log(response);
			this.setState({saved: response.data});
			// console.log(this.state.saved);
		}.bind(this));
	}

	// Called each time this component updates
	componentDidUpdate(prevProps, prevState) {
		// Conditional state change to avoid stack overflow error
		if(prevProps.savedUpdated !== this.props.savedUpdated || prevState.updated !== this.state.updated) {
			this.setState({
				updated: this.props.savedUpdated
			});
			// using helper function to get all saved articles
			helpers.getSavedArticles().then(function(response) {
				// console.log(response);
				this.setState({saved: response.data});
				// console.log(this.state.saved);
			}.bind(this));
		}
	}

	// Render this component
	render() {
		// For each item from db, render headline, date and url
		var saved = this.state.saved.map(function(item, index){
			// console.log("rendering item " + index);
			return (
			 	<div key={index} className="panel panel-primary">
					<div className="panel-heading">
						<div className="panel-title">
							<h5>{item.title}</h5>
						</div>
					</div>
					<div className="panel-body">
		                <p>Date published: {item.date}</p>
		                <a href={item.url} target="_blank"><p>View full article</p></a>
		                <button className="btn btn-lg btn-warning" onClick={this.handleClick.bind(this, item)}>Unsave</button>
	            	</div>
	            </div>
			);
		}.bind(this));
		return (
			<div className="row">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<div className="panel-title text-center">
							Saved
						</div>
					</div>
					<div className="panel-body">
						{saved}
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Saved;