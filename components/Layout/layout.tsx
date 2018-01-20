import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { LAYOUT } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";

namespace FRLayout {
  export interface OwnProps {
    children?: React.ReactNode;
    theme?: TReactCSSThemrTheme;
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
  export type State = {};
}

class FRLayout extends React.Component<FRLayout.Props, FRLayout.State> {
  static contextTypes = {
    stylus: PropTypes.string
  };
  render(): JSX.Element {
    const { theme, children, ...other } = this.props;
    return (
      <div
        className={classnames(
          theme.layout as string,
          theme[this.context.stylus] as string
        )}
      >
        {children}
      </div>
    );
  }
}

export const Layout = themr(LAYOUT, theme)(FRLayout);
