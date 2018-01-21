import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { SELECT } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";

namespace FRPanel {
  export interface OwnProps {
    children?: JSX.Element[];
    theme?: TReactCSSThemrTheme;
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLSelectElement>;
  export type State = {};
}

class FRPanel extends React.Component<FRPanel.Props, FRPanel.State> {
  static contextTypes = {
    stylus: PropTypes.string
  };
  render(): JSX.Element {
    const { theme, className, children, ...other } = this.props;
    return (
      <select
        className={classnames(
          theme.select as string,
          theme[this.context.stylus] as string,
          className
        )}
        {...other}
      >
        {children.map((child, i) => {
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
    );
  }
}

export const Select = themr(SELECT, theme)(FRPanel);
