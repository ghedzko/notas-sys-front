import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../routes/Home";
import { Login } from "../../routes/Login";
import { Notes } from "../../routes/Notes";
import "./App.css";

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/notes" component={Notes} />
      </Switch>
    </Router>
  );
};
