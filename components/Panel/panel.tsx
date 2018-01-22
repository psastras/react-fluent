import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { PANEL } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";
import { ucFirst } from "../../helpers/string";

namespace FRPanel {
  export interface OwnProps {
    children?: React.ReactNode;
    theme?: TReactCSSThemrTheme;
    direction?: "horizontal" | "vertical";
    pad?: {
      horizontal: "none" | "small" | "med" | "large";
      vertical: "none" | "small" | "med" | "large";
    };
    material?: "solid" | "transparent";
    stretchX?: boolean;
    stretchY?: boolean;
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
    const {
      theme,
      className,
      direction = "horizontal",
      stack = false,
      pad = {
        horizontal: "large",
        vertical: "med"
      },
      material = "transparent",
      stretchX,
      stretchY,
      children,
      ...other
    } = this.props;
    return (
      <div
        className={classnames(
          theme[material] as string,
          theme.panel as string,
          theme[`panel${ucFirst(direction)}`] as string,
          theme[`panelPadHorizontal${ucFirst(pad.horizontal)}`] as string,
          theme[`panelPadVertical${ucFirst(pad.vertical)}`] as string,
          stretchX && (theme.panelStretchX as string),
          stretchY && (theme.panelStretchY as string),
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
