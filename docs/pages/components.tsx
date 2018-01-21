import * as React from "react";
import { Title } from "../../components/Title/title";
import { Panel } from "../../components/Panel/panel";
import { SideNavigation } from "../../components/SideNavigation/sidenavigation";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";

namespace Components {
  interface RouteParams {
    component: string;
  }
  export interface Props extends RouteComponentProps<RouteParams> {}
  export interface State {}
}

export class Components extends React.Component<
  Components.Props,
  Components.State
> {
  render(): JSX.Element {
    const component = this.props.match.params.component;
    return (
      <Panel
        pad={{
          horizontal: "none",
          vertical: "med"
        }}
        stretchX
        stack
      >
        <SideNavigation>
          <Link to="/components/button">Button</Link>
          <Link to="/components/hero">Hero</Link>
          <Link to="/components/panel">Panel</Link>
          <Link to="/components/select">Select</Link>
          <Link to="/components/title">Title</Link>
        </SideNavigation>
        <main>
          {!component ? (
            <>
              <Title>Components</Title>
              <p>Sample text</p>
            </>
          ) : (
            <>
              <Title>{component}</Title>
            </>
          )}
        </main>
      </Panel>
    );
  }
}
