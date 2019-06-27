import React from 'react';

import styles from "./Spacer.module.scss";

interface SpacerProps {
  height?: number;
}

const Spacer = ({ height }: SpacerProps) => (
  <div className={styles.spacer} style={{ height: height }} />
);

export default Spacer;
