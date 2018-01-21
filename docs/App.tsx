import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "../components/Button/button";
import { PageBar } from "../components/PageBar/pagebar";
import { RFThemeProvider } from "../components/index";
import { Title } from "../components/Title/title";
import { Layout } from "../components/Layout/layout";
import { Panel } from "../components/Panel/panel";
import { Navigation } from "../components/Navigation/navigation";
import { SideNavigation } from "../components/SideNavigation/sidenavigation";
import { Switch, Route } from "react-router";
import { Home } from "./pages/home";
import { Link } from "react-router-dom";
import { Installation } from "./pages/installation";
import { Examples } from "./pages/examples";
import { Components } from "./pages/components";
import { Logo } from "./components/logo";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <RFThemeProvider>
        <Layout>
          <PageBar
            content={
              <Link style={{ display: "block" }} to="/">
                <div style={{ display: "flex" }}>
                  <Logo />React Fluent
                </div>
              </Link>
            }
          >
            <Navigation>
              <Link to="/installation">Installation</Link>
              <Link to="/components">Components</Link>
              <Link to="/examples">Examples</Link>
            </Navigation>
          </PageBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/installation" component={Installation} />
            <Route path="/components" component={Components} />
            <Route path="/examples" component={Examples} />
          </Switch>
        </Layout>
      </RFThemeProvider>
    );
  }
}
