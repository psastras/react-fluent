import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { HERO } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";
import { Panel } from "../Panel/panel";

namespace FRHero {
  export interface OwnProps {
    children?: React.ReactNode;
    theme?: TReactCSSThemrTheme;
    size?: "small" | "med" | "large";
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
  export type State = {};
}

class FRHero extends React.Component<FRHero.Props, FRHero.State> {
  static contextTypes = {
    stylus: PropTypes.string
  };
  render(): JSX.Element {
    const { theme, children, size, ...other } = this.props;
    return (
      <div>
        <Panel
          pad={{
            horizontal: "large",
            vertical: "large"
          }}
          className={classnames(
            theme.hero as string,
            theme[size] as string,
            theme[this.context.stylus] as string
          )}
          direction="vertical"
          material="solid"
          stretchX
          {...other}
        >
          {children}
        </Panel>
        <div className={theme.heroSpacer as string} />
      </div>
    );
  }
}

export const Hero = themr(HERO, theme)(FRHero);
