// eslint-disable-next-line
import React, { Component } from "react";
import Router from "Components/Router";
import Header from "Components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
  // <></>는 Fragments라고 하며 원하는 만큼 컴포넌트를 return활 수 있게 해준다.
}

export default App;
