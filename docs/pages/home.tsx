import * as React from "react";
import { Title } from "../../components/Title/title";
import { Panel } from "../../components/Panel/panel";
import { SideNavigation } from "../../components/SideNavigation/sidenavigation";

export class Home extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Panel stack>
        <main>
          <Title>Home</Title>
          <p>Sample text</p>
        </main>
      </Panel>
    );
  }
}
