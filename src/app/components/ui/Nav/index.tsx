import React from "react";

import { Logo, Container } from "../";
import classNames from "classnames/bind";

import AccountDetails from "app/components/AccountDetails";
import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

const Nav: React.SFC = () => {
  const accountAreaContainerClasses = cx({
    [styles.flexAlignedRight]: true,
    [styles.flexItem]: true
  })

  const logoContainerClasses = cx({
    [styles.flexItem]: true,
    [styles.logoContainer]: true
  })

  return (
    <Container>
      <nav className={styles.nav}>
        <div className={logoContainerClasses}>
          <Logo />
        </div>

        <div className={accountAreaContainerClasses}>
          <AccountDetails userName="Adam Bull" />
        </div>
      </nav>
    </Container>
  );
}

export default Nav;