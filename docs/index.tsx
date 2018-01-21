import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Component } from "react";
import "./index.css";

let App = require("./App").App;

const render = (Component: React.ComponentClass) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Component />
    </AppContainer>,
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
