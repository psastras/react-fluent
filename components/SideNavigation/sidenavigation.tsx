import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { SIDE_NAVIGATION } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";

namespace FRSideNavigation {
  export interface OwnProps {
    children?: JSX.Element[];
    theme?: TReactCSSThemrTheme;
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
  export type State = {};
}

class FRSideNavigation extends React.Component<
  FRSideNavigation.Props,
  FRSideNavigation.State
> {
  static contextTypes = {
    stylus: PropTypes.string
  };
  render(): JSX.Element {
    const { theme, className, children, ...other } = this.props;
    return (
      <div
        className={classnames(
          theme.panel as string,
          theme[this.context.stylus] as string,
          className
        )}
        {...other}
      >
        <ul className={theme.menu as string}>
          {children.map((child, i) => {
            return (
              <li
                key={i}
                className={classnames(
                  theme.menuItem as string,
                  theme[this.context.stylus] as string
                )}
              >
                {child}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export const SideNavigation = themr(SIDE_NAVIGATION, theme)(FRSideNavigation);