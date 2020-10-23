import React from "react";
import Pages from "./Components/Pages/Pages";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Pages />
      </Switch>
    </Router>
  );
}

export default App;
