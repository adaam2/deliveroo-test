import React from "react";

import HorizontalLogo from "assets/svgs/logo-horizontal.svg";

import styles from "./Logo.module.scss";

const Logo = () => (
  <div className={styles.logo}>
    <img src={HorizontalLogo} />
  </div>
);

export default Logo;
