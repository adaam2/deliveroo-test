import React from "react";

import { Logo, Container } from "../";

import styles from "./Nav.module.scss";

export interface NavProps {

}

const Nav: React.SFC<NavProps> = () => {
  return (
    <Container>
      <nav className={styles.nav}>
        <Logo />
      </nav>
    </Container>
  );
}

export default Nav;