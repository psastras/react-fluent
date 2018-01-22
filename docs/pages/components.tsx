import * as React from "react";
import { Title } from "../../components/title/title";
import { Panel } from "../../components/panel/panel";
import { SideNavigation } from "../../components/sidenavigation/sidenavigation";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { CodeBlockPreview } from "../components/codeblock";
const ReactMarkdown = require("react-markdown");

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
          <Link to="/components/navigation">Navigation</Link>
          <Link to="/components/pagebar">Page Bar</Link>
          <Link to="/components/panel">Panel</Link>
          <Link to="/components/select">Select</Link>
          <Link to="/components/sidenavigation">Side Navigation</Link>
          <Link to="/components/title">Title</Link>
        </SideNavigation>
        <main style={{ width: "100%" }}>
          {!component ? (
            <>
              <Title>Components</Title>
              <p>
                React Fluent components provide the building blocks for
                designing a Fluent webpage.
              </p>
              <p>
                Each component comes with two default styles (light and dark)
                and can be customized via various properties or by injecting
                your own styles via CSS modules.
              </p>
              <p>
                Please read the{" "}
                <Link to="/installation">installation guide</Link> to begin
                using these components in your project.
              </p>
            </>
          ) : (
            <>
              <ReactMarkdown
                source={require("../../components/" +
                  component.toLowerCase() +
                  "/README.md")}
                renderers={{ code: CodeBlockPreview }}
                className={this.context.stylus}
              />
            </>
          )}
        </main>
      </Panel>
    );
  }
}
