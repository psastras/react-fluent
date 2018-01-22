import * as React from "react";
import "!style-loader!css-loader!prismjs/themes/prism.css";
import * as ReactDOM from "react-dom";
import { Title } from "../../components/Title/title";
import { Hero } from "../../components/Hero/hero";
import * as styles from "./codeblock.css";
const JsxParser = require("react-jsx-parser").default;
const Prism = require("prismjs");

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
  codeEl: HTMLElement;
  constructor(props: CodeBlock.Props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(el: HTMLElement) {
    this.codeEl = el;
  }

  render() {
    const { ...bindings } = this.props;
    return (
      <div className={styles.codeblock}>
        <Title level="h5">Code</Title>
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                this.props.value,
                Prism.languages.javascript
              )
            }}
          />
        </pre>
        <Title level="h5">Result</Title>
        <JsxParser
          bindings={bindings}
          components={{ Title, Hero }}
          jsx={this.props.value}
        />
      </div>
    );
  }
}
