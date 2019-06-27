import React from 'react';
import classNames from "classnames/bind";

import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

export interface ContainerProps {
  children: any;
  flex?: boolean;
}

const Container: React.SFC<ContainerProps> = ({ children, flex }) => {
  const containerClasses = () => cx({
    [styles.containerBase]: true
  });

  return (
    <div className={containerClasses()} style={{ display: flex ? 'flex' : 'block' }}>
      {children}
    </div>
  );
}

export default Container;