import React from 'react';

import styles from "./CardList.module.scss";

export interface CardListProps {
  children: any;
}

const CardList: React.SFC<CardListProps> = ({ children }) => {
  return (
    <div className={styles.list}>
      {children}
    </div>
  );
}

export default CardList;