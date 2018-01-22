import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { HERO } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";
import { Panel } from "../panel/panel";

namespace FRHero {
  export interface OwnProps {
    children?: React.ReactNode;
    theme?: TReactCSSThemrTheme;
    shadow?: boolean;
    imageUrl?: string;
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
    const {
      theme,
      children,
      imageUrl,
      shadow = false,
      size,
      ...other
    } = this.props;
    return (
      <div>
        <Panel
          style={{ backgroundImage: `url(${imageUrl})` }}
          pad={{
            horizontal: "large",
            vertical: "none"
          }}
          className={classnames(
            theme.hero as string,
            shadow && (theme.shadow as string),
            theme[size] as string,
            theme[this.context.stylus] as string
          )}
          direction="vertical"
          material="solid"
          stretchX
          {...other}
        >
          <div>{children}</div>
        </Panel>
        <div className={theme.heroSpacer as string} />
      </div>
    );
  }
}

export const Hero = themr(HERO, theme)(FRHero);
