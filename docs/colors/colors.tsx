import * as React from "react";
import * as styles from "./colors.css";
import { Title } from "../../components/Title/title";

namespace Swatch {
  export interface Props {
    color: string;
  }
  export interface State {}
}

class Swatch extends React.Component<Swatch.Props, Swatch.State> {
  render(): JSX.Element {
    return (
      <div>
        <span
          style={{ backgroundColor: `var(--${this.props.color})` }}
          className={styles.swatch}
        />
        {this.props.color}
      </div>
    );
  }
}

export class Colors extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <>
        <Title level="h2">Color</Title>

        <Title level="h4">Light theme</Title>
        <Title level="h5">Base</Title>
        <div className={styles.swatchContainer}>
          <Swatch color="color-light-base-low" />
          <Swatch color="color-light-base-medium-low" />
          <Swatch color="color-light-base-medium" />
          <Swatch color="color-light-base-medium-high" />
          <Swatch color="color-light-base-high" />
        </div>
        <Title level="h5">List</Title>
        <div className={styles.swatchContainer}>
          <Swatch color="color-light-list-low" />
          <Swatch color="color-light-list-medium" />
          <Swatch color="color-light-list-accent-low" />
          <Swatch color="color-light-list-accent-medium" />
          <Swatch color="color-light-list-accent-high" />
        </div>

        <Title level="h4">Dark theme</Title>
        <Title level="h5">Base</Title>
        <div className={styles.swatchContainer}>
          <Swatch color="color-dark-base-low" />
          <Swatch color="color-dark-base-medium-low" />
          <Swatch color="color-dark-base-medium" />
          <Swatch color="color-dark-base-medium-high" />
          <Swatch color="color-dark-base-high" />
        </div>
        <Title level="h5">List</Title>
        <div className={styles.swatchContainer}>
          <Swatch color="color-dark-list-low" />
          <Swatch color="color-dark-list-medium" />
          <Swatch color="color-dark-list-accent-low" />
          <Swatch color="color-dark-list-accent-medium" />
          <Swatch color="color-dark-list-accent-high" />
        </div>
      </>
    );
  }
}
