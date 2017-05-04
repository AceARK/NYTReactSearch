// Include React
var React = require("react");

// Socket.io client code
const io = require('socket.io-client');
const socket = io();

var Bubble = React.createClass({

  // Get initial state
  getInitialState: function() {
  	return {
  		view: false,
      title: "",
      style: "hidden"
  	};
  },

  componentDidMount: function() {
  // var socket = io.connect('/');
    socket.on('broadcast', function(message) {
        console.log('Saved article', message);
        var newState = {
          view: true,
          style: "",
          title: message
        }
        this.setState(newState);
    }.bind(this));
  },

  componentDidUpdate: function(prevProps, prevState) {
    // Setting timeout for notification bubble
    if(this.state.view) {
      setTimeout(()=> {
        var hiddenState = {view: false, style: "hidden", title: ""};
        this.setState(hiddenState);
      }, 3000);
    }
  },

// Bubble component default view false, will be updated each time an article is saved.
// If saved, set title, set view = true, and after interval of 3 secs, set view = false.

  // Render the component
  render: function() {
    let style = `${this.state.style} notification text-center`;
    return (
      <div className={style}>
        <h4>New article saved</h4>
        <h4 id="notificationTitle">Article title: {this.state.title}</h4>
      </div>
    );
  }
});

module.exports = Bubble;