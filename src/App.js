import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import list from "./Components/list";
import Description from "./Components/description";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Seasonal Fruits</Link>
        </nav>
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/description">Description</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/list" component={list}></Route>
        <Route path="/description" component={Description} />
        <Route path="/" component={list}></Route>
      </Switch>
    </Router >
  );
}

export default App;
