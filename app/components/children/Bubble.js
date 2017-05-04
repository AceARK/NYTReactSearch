// Include React
var React = require("react");

var Bubble = React.createClass({

  // Get initial state
  getInitialState: function() {
  	return {
  		view: false,
      title: "",
      style: "hidden"
  	};
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(prevState.title !== this.props.title) {
      console.log("TITLE IN BUBBLE " + this.props.title);
      var newState = {
        view: true,
        style: "",
        title: this.props.title
      }
        this.setState(newState);
    }
  },

// Bubble component default view false, will be updated each time an article is saved.
// If saved, set title, set view = true, and after interval of 4 secs, set view = false.

  // Render the component
  render: function() {
    let style = `${this.state.style} notification`;
    return (
      <div className={style}>
        <h3>New article saved</h3>
        <h3 id="notificationTitle">Article title: {this.state.title}</h3>
      </div>
    );
  }
});

module.exports = Bubble;