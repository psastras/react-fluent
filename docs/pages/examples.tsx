import * as React from "react";
import { Title } from "../../components/Title/title";
import { Panel } from "../../components/Panel/panel";
import { Link } from "react-router-dom";

export class Examples extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Panel
        pad={{
          horizontal: "none",
          vertical: "med"
        }}
        stretchX
        stack
      >
        <main>
          <Title>Examples</Title>
          <p>
            This site is written using React Fluent. More examples coming soon!
          </p>
        </main>
      </Panel>
    );
  }
}
