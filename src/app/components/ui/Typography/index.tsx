import React from 'react';

import styles from "./Typography.module.scss";

interface ChildProps {
  children: any;
}

export enum FontWeight {
  Regular = 400,
  Bold = 600
}

interface TextProps {
  fontSize?: number;
  colour?: string;
  lineHeight?: number;
  fontWeight?: FontWeight;
};

export const Title = ({ children, fontSize, colour, lineHeight, fontWeight }: ChildProps & TextProps) => (
  <h1 style={{ fontSize: fontSize, color: colour, lineHeight: lineHeight, fontWeight: fontWeight }} className={styles.title}>
    {children}
  </h1>
)

export const P = ({ children, fontSize, colour, lineHeight, fontWeight }: ChildProps & TextProps) => (
  <p style={{ fontSize: fontSize, color: colour, lineHeight: lineHeight, fontWeight: fontWeight }} className={styles.p}>
    {children}
  </p>
)
