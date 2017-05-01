// Include React
var React = require("react");
import Query from "./grandchildren/Query";
import Results from "./grandchildren/Results";

var Search = React.createClass({

  render: function() {
    return (
      	<div className="row">
			<Query />
		</div>
    );
  }
});

module.exports = Search;
