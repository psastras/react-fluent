import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "../components/Button/button";
import { PageBar } from "../components/PageBar/pagebar";
import { RFThemeProvider } from "../components/index";
import { Colors } from "./colors/colors";
import { Title } from "../components/Title/title";
import "./index.css";
import { Layout } from "../components/Layout/layout";
import { Panel } from "../components/Panel/panel";
import { Navigation } from "../components/Navigation/navigation";

class MyComponent extends React.Component {
  render() {
    return (
      <RFThemeProvider>
        <Layout>
          <RFThemeProvider stylus="dark">
            <PageBar title="React Fluent">
              <Navigation>
                <a href="">Installation</a>
                <a href="">Components</a>
                <a href="">Examples</a>
              </Navigation>
            </PageBar>
          </RFThemeProvider>
          {/* <Button>Secondary</Button>
        <Button stylus="primary">Primary</Button>
        <Button stylus="light">Light</Button> */}
          <Panel>
            <Colors />
          </Panel>
        </Layout>
      </RFThemeProvider>
    );
  }
}

ReactDOM.render(<MyComponent />, document.body);
