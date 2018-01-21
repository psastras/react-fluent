import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./App";
import { Component } from "react";

const render = (Component: React.ComponentClass) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

declare const module: any;
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").App;
    render(NextApp);
  });
}
