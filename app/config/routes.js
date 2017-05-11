// Inclue React
var React = require("react");

// Include react-router 
var router = require("react-router");

// Include Route component to display individual routes
var Route = router.Route;

// Include Router component to contain all Routes
var Router = router.Router;

// Include hashHistory prop to handle routing client side without a server
var browserHistory = router.browserHistory;

// Include IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference high-level components
var Main = require("../components/Main");
var Saved = require("../components/children/Saved");
var Search = require("../components/children/Search");
var Query = require("../components/children/grandchildren/Query");
var Results = require("../components/children/grandchildren/Results");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={browserHistory}>

    <Route path="/" component={Main}>
      {/* If user selects Child1 then show the appropriate component*/}
      <IndexRoute component={Search} />
          <Route path="query" component={Query} />
          <Route path="results" component={Results} />
      {/* If user selects Child2 then show the appropriate component*/}
      <Route path="saved" component={Saved} />
    </Route>
  </Router>
);
