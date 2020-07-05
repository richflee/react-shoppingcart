import React from "react";
import styles from "./styles.module.css";

function TwoColLayout(props: any) {
  const { left, right } = props;
  return (
    <div className={styles.container}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export default React.memo(TwoColLayout);
