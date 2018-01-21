import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { PANEL } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";

namespace FRPanel {
  export interface OwnProps {
    children?: React.ReactNode;
    theme?: TReactCSSThemrTheme;
    stack?: boolean;
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
  export type State = {};
}

class FRPanel extends React.Component<FRPanel.Props, FRPanel.State> {
  static contextTypes = {
    stylus: PropTypes.string
  };
  render(): JSX.Element {
    const { theme, className, stack = false, children, ...other } = this.props;
    return (
      <div
        className={classnames(
          theme.panel as string,
          stack && (theme.panelStack as string),
          theme[this.context.stylus] as string,
          className
        )}
        {...other}
      >
        {children}
      </div>
    );
  }
}

export const Panel = themr(PANEL, theme)(FRPanel);
