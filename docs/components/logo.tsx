import * as React from "react";
import * as styles from "./logo.css";

export class Logo extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className={styles.logo}>
        <div style={{ transform: "rotateZ(20deg)" }} />
        <div style={{ transform: "rotateZ(50deg)" }} />
        <div style={{ transform: "rotateZ(80deg)" }} />
      </div>
    );
  }
}
