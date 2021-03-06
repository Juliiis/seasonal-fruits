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
      </div>
      <Switch>
        <Route path="/list" component={List}></Route>
        <Route path="/description/:id" component={Description} />
        <Route path="/" component={List}></Route>
      </Switch>
    </Router>
  );
}

export default App;
