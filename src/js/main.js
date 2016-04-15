import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, useRouterHistory, hashHistory } from "react-router";
import { createHashHistory } from 'history'

import App from "./components/App";
import Movies from "./components/pages/Movies";
import NewMovie from "./components/pages/NewMovie";
import About from "./components/pages/About";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const app = document.getElementById('app');
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Movies}></IndexRoute>
      <Route path="movie" component={Movies}></Route>
      <Route path="add" component={NewMovie}></Route>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>
, app);