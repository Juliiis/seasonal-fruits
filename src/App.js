import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import List from "./Components/list";
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
        <Route path="/list" component={List}></Route>
        <Route path="/description/:id" component={Description} />
        <Route path="/" component={List}></Route>
      </Switch>
    </Router >
  );
}

export default App;
