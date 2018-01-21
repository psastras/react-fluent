import * as React from "react";
import { Title } from "../../components/Title/title";
import { Panel } from "../../components/Panel/panel";
import { SideNavigation } from "../../components/SideNavigation/sidenavigation";
import { Hero } from "../../components/Hero/hero";
import { Button } from "../../components/Button/button";
import { RFThemeProvider } from "../../components/index";

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
          <Hero size="large">
            <Title>React Fluent</Title>
            <Title level="h2">
              A set of React components implementing Fluent Design
            </Title>
            <div>
              <Button>Start here</Button>
            </div>
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
          <Title level="h2">Features</Title>
        </Panel>
      </Panel>
    );
  }
}
