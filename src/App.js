import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import Calculator from './components/Calculator';
import Home from  './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
