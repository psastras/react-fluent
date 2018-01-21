import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { SELECT } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";
import { selectContainer } from "./theme.css";
import { SyntheticEvent } from "react";

namespace FRPanel {
  export interface OwnProps {
    children?: JSX.Element[] | JSX.Element;
    theme?: TReactCSSThemrTheme;
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLSelectElement>;
  export type State = {
    value: string;
  };
}

class FRPanel extends React.Component<FRPanel.Props, FRPanel.State> {
  static contextTypes = {
    stylus: PropTypes.string
  };

  private select: HTMLSelectElement;

  constructor(props: FRPanel.Props, state: FRPanel.State) {
    super(props, state);
    this.state = {
      value: ""
    };
  }

  componentDidMount(): void {
    this.setState({
      value: this.select.value
    });
  }

  onChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    this.setState({
      value: this.select.value
    });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render(): JSX.Element {
    const { theme, className, children, ...other } = this.props;
    return (
      <div
        className={classnames(
          theme.selectContainer as string,
          theme[this.context.stylus] as string,
          className
        )}
      >
        <span
          className={classnames(
            theme.selectDefault as string,
            theme[this.context.stylus] as string
          )}
        >
          {this.state.value}
        </span>
        <select
          ref={e => (this.select = e)}
          className={classnames(
            theme.select as string,
            theme[this.context.stylus] as string,
            className
          )}
          {...other}
          onChange={this.onChange}
        >
          {React.Children.map(children, (child, i) => {
            return (
              <option
                key={i}
                className={classnames(
                  theme.selectItem as string,
                  theme[this.context.stylus] as string
                )}
              >
                {child}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

// background: url("data:image/svg+xml;utf8,<svg fill='#666' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'> <path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'/> <path d='M0-.75h24v24H0z' fill='none'/> </svg>"), no-repeat;

export const Select = themr(SELECT, theme)(FRPanel);
