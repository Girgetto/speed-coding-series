import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { Calculator, ToDoList, Home } from "./components";

function Routes() {
  return (
    <div className="App">
      <Router>
        <navbar>
          <Link to="/">Home</Link>
        </navbar>
        <Switch>
          <Route path="/to-do">
            <ToDoList />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
