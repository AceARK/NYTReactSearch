// Inclue React
var React = require("react");

// Include react-router 
var router = require("react-router");

import { BrowserRouter as Router, Route } from 'react-router-dom'

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
  <Router history={Router}>

    <Route path="/" component={Main}>

      {/* If user selects Child1 then show the appropriate component*/}
      <Route path="Search" component={Search} >

        {/* Child1 has its own Grandchildren options */}
        <Route path="Query" component={Query} />
        <Route path="Results" component={Results} />

        <IndexRoute component={Query} />

      </Route>

      {/* If user selects Child2 then show the appropriate component*/}
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Saved} />

    </Route>
  </Router>
);
