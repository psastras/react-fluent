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
    stylus?: "light" | "dark";
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
  export type State = {};
}

class FRPanel extends React.Component<FRPanel.Props, FRPanel.State> {
  static contextTypes = {
    stylus: PropTypes.string
  };
  render(): JSX.Element {
    const {
      theme,
      className,
      children,
      stylus = this.context.stylus,
      ...other
    } = this.props;
    return (
      <div
        className={classnames(
          theme.panel as string,
          theme[stylus] as string,
          className
        )}
        {...other}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child as any, { stylus })
        )}
      </div>
    );
  }
}

export const Panel = themr(PANEL, theme)(FRPanel);
