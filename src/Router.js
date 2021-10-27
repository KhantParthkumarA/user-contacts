import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/homeComponent";

const Router = (props) => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
  </Switch>
)
export default Router;