import * as React from "react";
import * as PropTypes from "prop-types";
import * as color from "color";

export namespace RFThemeProvider {
  export interface Props {
    stylus?: "light" | "dark";
    accent?: string;
    children?: React.ReactNode;
  }

  export interface State {}

  export interface Context {
    stylus: "light" | "dark";
  }
}

export class RFThemeProvider extends React.Component<
  RFThemeProvider.Props,
  RFThemeProvider.State
> {
  static childContextTypes = {
    stylus: PropTypes.string
  };

  getChildContext(): RFThemeProvider.Context {
    const { accent = undefined } = this.props;
    if (accent) {
      const accentColor = color(accent);
      const isDark =
        5 * accentColor.green() + 2 * accentColor.red() + accentColor.blue() <=
        8 * 128;
      return {
        stylus: this.props.stylus || (isDark ? "light" : "dark")
      };
    }
    return {
      stylus: this.props.stylus || "light"
    };
  }

  componentDidMount(): void {
    const { accent = undefined } = this.props;
    if (accent) {
      const props = {
        "--color-accent": accent,
        "--color-light-list-accent-low": color(accent)
          .lighten(0.6)
          .hex(),
        "--color-light-list-accent-medium": color(accent)
          .lighten(0.4)
          .hex(),
        "--color-light-list-accent-high": color(accent)
          .lighten(0.3)
          .hex(),
        "--color-dark-list-accent-low": color(accent)
          .darken(0.4)
          .hex(),
        "--color-dark-list-accent-medium": color(accent)
          .darken(0.2)
          .hex(),
        "--color-dark-list-accent-high": color(accent)
          .darken(0.1)
          .hex()
      } as { [id: string]: string };
      for (const prop in props) {
        document.documentElement.style.setProperty(prop, props[prop]);
      }
    }
  }

  render(): JSX.Element {
    return <>{this.props.children}</>;
  }
}
