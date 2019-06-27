import React from "react";

import { Logo } from "../";

export interface NavProps {

}

const Nav: React.SFC<NavProps> = () => {
  return (
    <nav>
      <Logo />
    </nav>
  );
}

export default Nav;