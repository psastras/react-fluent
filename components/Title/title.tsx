import * as React from "react";
import { themr, TReactCSSThemrTheme } from "react-css-themr";
import { TITLE } from "../indentifiers";
import * as classnames from "classnames";
import * as theme from "./theme.css";
import * as PropTypes from "prop-types";

namespace FRTitle {
  export interface OwnProps {
    level?: "h1" | "h2" | "h3" | "h4" | "h5";
    type?: "header" | "subheader" | "title" | "subtitle" | "base";
    alt?: boolean;
    children?: React.ReactNode;
    theme?: TReactCSSThemrTheme;
  }

  export type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;
  export type State = {};
}

class FRTitle extends React.Component<FRTitle.Props, FRTitle.State> {
  static contextTypes = {
    stylus: PropTypes.string
  };
  render(): JSX.Element {
    const {
      theme,
      className,
      type,
      alt,
      level,
      children,
      ...other
    } = this.props;
    const modifiedType =
      alt && (type === "subtitle" || type === "base") ? `${type}Alt` : type;
    switch (level) {
      case "h1":
        return (
          <h1
            className={classnames(
              type ? (theme[modifiedType] as string) : (theme.header as string),
              className
            )}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={classnames(
              type
                ? (theme[modifiedType] as string)
                : (theme.subheader as string),
              className
            )}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={classnames(
              type ? (theme[modifiedType] as string) : (theme.title as string),
              className
            )}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4
            className={classnames(
              type
                ? (theme[modifiedType] as string)
                : alt
                  ? (theme.subtitleAlt as string)
                  : (theme.subtitle as string),
              className
            )}
          >
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5
            className={classnames(
              type
                ? (theme[modifiedType] as string)
                : alt ? (theme.baseAlt as string) : (theme.base as string),
              className
            )}
          >
            {children}
          </h5>
        );
      default:
        return (
          <h1
            className={classnames(
              type ? (theme[modifiedType] as string) : (theme.header as string),
              className
            )}
          >
            {children}
          </h1>
        );
    }
  }
}

export const Title = themr(TITLE, theme)(FRTitle);
