import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Home from "pages/Home";
import parser from "./server/parser";

import "./App.scss";

const App = () => (
  <Switch>
    <Route exact path="/" render={() => {
      return <Home neighbourhood={parser()} />
    }} />
  </Switch>
);

export default App;
