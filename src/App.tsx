import React from 'react';
import ReactDOM from "react-dom";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import axe from "react-axe";

import Home from "pages/Home";
import parser from "./server/parser";

import "./App.scss";

const axeConf = {
  rules: [
    { id: 'heading-order', enabled: true },
    { id: 'label-title-only', enabled: true },
    { id: 'link-in-text-block', enabled: true },
    { id: 'region', enabled: true },
    { id: 'skip-link', enabled: true },
    { id: 'help-same-as-label', enabled: true }
  ]
};

if (process.env.NODE_ENV !== 'production' && process.browser) {
  axe(React, ReactDOM, 1000, axeConf);
}

const App = () => (
  <Switch>
    <Route exact path="/" render={() => (<Home neighbourhood={parser()} />)} />
  </Switch>
);

export default App;
