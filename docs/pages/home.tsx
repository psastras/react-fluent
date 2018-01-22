import * as React from "react";
import { Title } from "../../components/title/title";
import { Panel } from "../../components/panel/panel";
import { SideNavigation } from "../../components/sidenavigation/sidenavigation";
import { Hero } from "../../components/hero/hero";
import { Button } from "../../components/button/button";
import { RFThemeProvider } from "../../components/index";
import { Link } from "react-router-dom";

export class Home extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Panel
        pad={{
          horizontal: "none",
          vertical: "none"
        }}
        stretchX
        direction="vertical"
      >
        <RFThemeProvider stylus="dark">
          <Hero size="large" imageUrl="/assets/images/hero1.jpg" shadow>
            <Title>React Fluent</Title>
            <Title level="h3">
              A set of React components implementing Fluent Design.
            </Title>
          </Hero>
        </RFThemeProvider>
        <Panel
          pad={{
            horizontal: "none",
            vertical: "large"
          }}
          stretchX
          direction="vertical"
        >
          <div>
            <Title level="h2">Features</Title>
            <p>
              Customizable light and dark themes - switch themes on the fly or
              on a per component basis. React Fluent uses CSS modules with
              react-css-themr to provide customizability for each component.
            </p>
            <p>
              Mobile first components resize and are optimized for multiple
              viewport sizes.
            </p>
            <p>
              Minimal dependencies and modular components keep bundle sizes in
              check.
            </p>
            <p>
              See the <Link to="/installation">Installation Guide</Link> to get
              started.
            </p>
          </div>
        </Panel>
      </Panel>
    );
  }
}
