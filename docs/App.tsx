import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "../components/Button/button";
import { PageBar } from "../components/PageBar/pagebar";
import { RFThemeProvider } from "../components/index";
import { Colors } from "./colors/colors";
import { Title } from "../components/Title/title";
import { Layout } from "../components/Layout/layout";
import { Panel } from "../components/Panel/panel";
import { Navigation } from "../components/Navigation/navigation";
import { SideNavigation } from "../components/SideNavigation/sidenavigation";

export class App extends React.Component {
  render() {
    return (
      <RFThemeProvider>
        <Layout>
          <PageBar title="React Fluent">
            <Navigation>
              <a href="">Installation</a>
              <a href="">Components</a>
              <a href="">Examples</a>
            </Navigation>
          </PageBar>
          <Panel stack>
            <SideNavigation>
              <a href="">Installation</a>
              <a href="">Components</a>
              <a href="">Examples</a>
            </SideNavigation>
            <Colors />
          </Panel>
        </Layout>
      </RFThemeProvider>
    );
  }
}
