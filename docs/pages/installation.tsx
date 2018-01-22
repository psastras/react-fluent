import * as React from "react";
import { Title } from "../../components/Title/title";
import { Panel } from "../../components/Panel/panel";
import { SideNavigation } from "../../components/SideNavigation/sidenavigation";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import { CodeBlock } from "../components/codeblock";
const ReactMarkdown = require("react-markdown");
const install = require("../../INSTALL.md");

export class Installation extends React.Component<{}, {}> {
  static contextTypes = {
    stylus: PropTypes.string
  };
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
          <ReactMarkdown
            renderers={{ code: CodeBlock }}
            source={install}
            className={this.context.stylus}
          />
        </main>
      </Panel>
    );
  }
}
