import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { SIDE_NAVIGATION } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";
import { Select } from "../Select/select";
import { Panel } from "../Panel/panel";

namespace FRSideNavigation {
  export interface OwnProps {
    children?: JSX.Element | JSX.Element[];
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
      <Panel
        pad={{
          horizontal: "none",
          vertical: "none"
        }}
        className={classnames(
          theme.panel as string,
          theme[this.context.stylus] as string,
          className
        )}
        {...other}
      >
        <div className={theme.menuCollapsed as string}>
          <Select>{children}</Select>
        </div>
        <ul className={theme.menu as string}>
          {React.Children.map(children, (child, i) => {
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
      </Panel>
    );
  }
}

export const SideNavigation = themr(SIDE_NAVIGATION, theme)(FRSideNavigation);
