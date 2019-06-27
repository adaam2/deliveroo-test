import React from "react";

import HorizontalLogo from "assets/svgs/logo-horizontal.svg";

interface LogoProps {
  altText?: string;
}

const Logo = ({ altText = "Deliveroo" }: LogoProps) => (
  <>
    <img alt={altText} src={HorizontalLogo} />
  </>
);

export default Logo;
