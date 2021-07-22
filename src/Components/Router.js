import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Movies from "Routes/Movies";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "Components/Header"; // "Components/Header/Header" 주소가 이렇게 되지 않는 이유는 Headr 폴더 내에 index.js가 있기 때문
// eslint-disable-next-line
export default () => (
  // Compostion은 두 개 이상의 Route를 랜더링하는 방식(동시에)
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Movies} />
      <Route path="/search" exact component={Search} />
      <Route path="/tv" exact component={TV} />
      <Redirect from="*" to="/" />
    </>
  </Router>
);
