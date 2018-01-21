import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { PAGE_BAR } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";
import { Panel } from "../Panel/panel";
import { RFThemeProvider } from "../index";
import { pageBar } from "./theme.css";
import { computeStylus } from "../../helpers/color";

namespace FRPageBar {
  export interface OwnProps {
    content?: JSX.Element[] | JSX.Element;
    children?: JSX.Element[] | JSX.Element;
    accent?: boolean;
    theme?: TReactCSSThemrTheme;
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLSpanElement>;
  export type State = {};
}

class FRPageBar extends React.Component<FRPageBar.Props, FRPageBar.State> {
  static contextTypes = {
    accent: PropTypes.string,
    stylus: PropTypes.string
  };

  render(): JSX.Element {
    const {
      content,
      theme,
      accent = false,
      className,
      children,
      ...other
    } = this.props;

    const stylus = accent
      ? computeStylus(this.context.accent) === "light" ? "dark" : "light"
      : this.context.stylus;

    return (
      <RFThemeProvider stylus={stylus}>
        <Panel
          pad={{
            horizontal: "large",
            vertical: "med"
          }}
          theme={theme}
          className={classnames(
            theme.pageBar as string,
            theme[stylus] as string,
            accent && (theme.pageBarAccent as string)
          )}
          {...other}
        >
          <span
            className={classnames(
              theme.pageBarTitle as string,
              theme[stylus] as string,
              className
            )}
          >
            {content}
          </span>
          {children}
        </Panel>
      </RFThemeProvider>
    );
  }
}

export const PageBar = themr(PAGE_BAR, theme)(FRPageBar);
