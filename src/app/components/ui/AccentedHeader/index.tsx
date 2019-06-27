import React from 'react';

import styles from "./AccentedHeader.module.scss";
import { Container } from 'ui';

export interface AccentedHeaderProps {
  children: any;
  className: string;
}

const AccentedHeader: React.SFC<AccentedHeaderProps> = ({ children }) => {
  return (
    <div className={styles.accentedHeader}>
      <Container flex={true}>
        {children}
      </Container>
    </div>
  );
}

export default AccentedHeader;