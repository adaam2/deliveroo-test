import React from 'react';

import styles from "./Typography.module.scss";

interface ChildProps {
  children: string;
}

export const Title = ({ children }: ChildProps) => (
  <h1 className={styles.title}>
    {children}
  </h1>
)

interface ParagraphProps {
  fontSize?: number;
  colour: string;
};

export const P = ({ children, fontSize, colour }: ChildProps & ParagraphProps) => (
  <p style={{ fontSize: fontSize, color: colour }} className={styles.p}>
    {children}
  </p>
)
