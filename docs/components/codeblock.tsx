import * as React from "react";
import "!style-loader!css-loader!prismjs/themes/prism.css";
import * as ReactDOM from "react-dom";
import { Title } from "../../components/title/title";
import { Hero } from "../../components/hero/hero";
import * as styles from "./codeblock.css";
import { Panel } from "../../components/panel/panel";
const JsxParser = require("react-jsx-parser").default;
const Prism = require("prismjs");
import "prismjs/components/prism-jsx.min";
import { Select } from "../../components/select/select";
import { Navigation } from "../../components/navigation/navigation";
import { PageBar } from "../../components/pagebar/pagebar";
import { SideNavigation } from "../../components/sidenavigation/sidenavigation";

namespace CodeBlock {
  export interface Props {
    value: string;
    language?: string;
  }

  export interface State {}
}

export class CodeBlock extends React.Component<
  CodeBlock.Props,
  CodeBlock.State
> {
  render(): JSX.Element {
    return (
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(this.props.value, Prism.languages.jsx)
          }}
        />
      </pre>
    );
  }
}

export class CodeBlockPreview extends React.Component<
  CodeBlock.Props,
  CodeBlock.State
> {
  render(): JSX.Element {
    return (
      <div className={styles.codeblock}>
        <Title level="h5">Code</Title>
        <CodeBlock value={this.props.value} />
        <Title level="h5">Result</Title>
        <JsxParser
          components={{
            Title,
            Hero,
            Panel,
            Select,
            Navigation,
            PageBar,
            SideNavigation
          }}
          jsx={this.props.value}
        />
      </div>
    );
  }
}
