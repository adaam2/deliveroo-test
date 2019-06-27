import React from 'react';

import { Icon, P } from '../';
import styles from "./AccountDetails.module.scss";

export interface AccountDetailsProps {
  userName: string;
}

const AccountDetails: React.SFC<AccountDetailsProps> = ({ userName }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flexItem}>
        <Icon iconKey="user" />
      </div>
      <div className={styles.userName}>
        <P marginLeft={8} fontSize={16} colour="#2e3333">
          {userName}
        </P>
      </div>
    </div>
  );
}

export default AccountDetails;