import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { Component } from "react";
import "./index.css";

let App = require("./App").App;

const render = (Component: React.ComponentClass) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer warnings={false}>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render(App);

declare const module: any;
if (module.hot) {
  module.hot.accept("./App", () => {
    App = require("./App").App;
    render(App);
  });

  module.hot.accept();
}
