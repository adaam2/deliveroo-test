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
  marginLeft?: number;
  marginRight?: number;
};

export const Title = ({ children, fontSize, colour, lineHeight, fontWeight, marginLeft, marginRight }: ChildProps & TextProps) => (
  <h1 style={{ fontSize: fontSize, color: colour, lineHeight: lineHeight, fontWeight: fontWeight, marginLeft: marginLeft, marginRight: marginRight }} className={styles.title}>
    {children}
  </h1>
)

export const P = ({ children, fontSize, colour, lineHeight, fontWeight, marginLeft, marginRight }: ChildProps & TextProps) => (
  <p style={{ fontSize: fontSize, color: colour, lineHeight: lineHeight, fontWeight: fontWeight, marginLeft: marginLeft, marginRight: marginRight }} className={styles.p}>
    {children}
  </p>
)
