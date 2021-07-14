import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
// eslint-disable-next-line
export default () => (
  // Compostion은 두 개 이상의 Route를 랜더링하는 방식(동시에)
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
      <Route path="/tv" exact component={TV} />
      <Redirect from="*" to="/" />
    </>
  </Router>
);
