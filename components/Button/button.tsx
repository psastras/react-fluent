import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { BUTTON } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";

namespace FRButton {
  export interface OwnProps {
    children?: React.ReactNode;
    stylus?: "primary" | "secondary" | "light";
    theme?: TReactCSSThemrTheme;
  }

  export type Props = OwnProps &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >;
  export type State = {};
}

class FRButton extends React.Component<FRButton.Props, FRButton.State> {
  render(): JSX.Element {
    const {
      theme,
      stylus = this.props.type === "submit" ? "primary" : "secondary",
      children,
      ...other
    } = this.props;
    return (
      <button
        className={classnames(theme.button as string, theme[stylus] as string)}
        {...other}
      >
        {children}
      </button>
    );
  }
}

export const Button = themr(BUTTON, theme)(FRButton);
