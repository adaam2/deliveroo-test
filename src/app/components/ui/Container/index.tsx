import React from 'react';
import classNames from "classnames/bind";

import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

export interface ContainerProps {
  children: any;
  className?: string;
}

const Container: React.SFC<ContainerProps> = ({ children, className = "" }) => {
  const containerClasses = () => cx({
    [styles.containerBase]: true,
    [className]: true
  });

  return (
    <div className={containerClasses()}>
      {children}
    </div>
  );
}

export default Container;