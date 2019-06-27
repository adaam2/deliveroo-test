import React from 'react';

import styles from "./AccentedHeader.module.scss";
import { Container } from 'ui';

export interface AccentedHeaderProps {
  children: any;
  className?: string;
}

const AccentedHeader: React.SFC<AccentedHeaderProps> = ({ children, className }) => {
  return (
    <header className={styles.accentedHeader}>
      <Container className={className}>
        {children}
      </Container>
    </header>
  );
}

export default AccentedHeader;