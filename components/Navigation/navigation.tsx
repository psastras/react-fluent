import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { NAVIGATION } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";
import { menuDrawerIcon } from "./theme.css";

namespace FRNavigation {
  export interface OwnProps {
    children?: JSX.Element[];
    theme?: TReactCSSThemrTheme;
    stylus?: "light" | "dark";
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
  export type State = {};
}

class FRNavigation extends React.Component<
  FRNavigation.Props,
  FRNavigation.State
> {
  static contextTypes = {
    stylus: PropTypes.string
  };
  render(): JSX.Element {
    const { theme, children, ...other } = this.props;
    return (
      <div
        className={classnames(
          theme.navigation as string,
          theme[this.context.stylus] as string
        )}
      >
        <input
          type="checkbox"
          id="drawer-toggle"
          className={theme.menuDrawerIconHidden as string}
        />
        <label
          htmlFor="drawer-toggle"
          className={theme.menuDrawerIcon as string}
        />
        <ul className={theme.menu as string}>
          {children.map(child => {
            return (
              <li
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

export const Navigation = themr(NAVIGATION, theme)(FRNavigation);
