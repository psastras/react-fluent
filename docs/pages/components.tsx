import * as React from "react";
import { Title } from "../../components/Title/title";
import { Panel } from "../../components/Panel/panel";
import { SideNavigation } from "../../components/SideNavigation/sidenavigation";
import { Link } from "react-router-dom";

export class Components extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Panel stack>
        <SideNavigation>
          <Link to="/">Button</Link>
          <Link to="/">Select</Link>
          <Link to="/">Title</Link>
        </SideNavigation>
        <main>
          <Title>Components</Title>
          <p>Sample text</p>
        </main>
      </Panel>
    );
  }
}
