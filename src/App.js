import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
