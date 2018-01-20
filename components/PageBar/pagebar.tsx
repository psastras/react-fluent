import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { PAGE_BAR } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";
import { Panel } from "../Panel/panel";

namespace FRPageBar {
  export interface OwnProps {
    title?: React.ReactNode;
    children?: React.ReactNode;
    theme?: TReactCSSThemrTheme;
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
  export type State = {};
}

class FRPageBar extends React.Component<FRPageBar.Props, FRPageBar.State> {
  static contextTypes = {
    stylus: PropTypes.string
  };

  render(): JSX.Element {
    const { theme, title, className, children, ...other } = this.props;

    return (
      <Panel
        className={classnames(
          theme.pageBar as string,
          theme[this.context.stylus] as string
        )}
        {...other}
      >
        <span className={classnames(theme.pageBarTitle as string, className)}>
          {title}
        </span>
        {children}
      </Panel>
    );
  }
}

export const PageBar = themr(PAGE_BAR, theme)(FRPageBar);
