import React from 'react';
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

export enum ButtonType {
  Primary,
  Secondary
}

export interface ButtonProps {
  type: ButtonType,
  children: any;
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  ariaLabel?: string;
}

const Button: React.SFC<ButtonProps> = ({
  type = ButtonType.Primary,
  children,
  onClick,
  ariaLabel
}) => {
  const buttonClasses = cx({
    [styles.button]: true,
    [styles.primary]: type === ButtonType.Primary,
    [styles.secondary]: type === ButtonType.Secondary
  });

  return (
    <button aria-label={ariaLabel} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

export default Button;