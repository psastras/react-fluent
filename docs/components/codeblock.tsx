import * as React from "react";
import "!style-loader!css-loader!prismjs/themes/prism.css";
import * as ReactDOM from "react-dom";
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
    return (
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
    );
  }
}
