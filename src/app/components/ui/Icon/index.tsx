import React from 'react';

export interface IconProps {
  altText?: string;
}

const Icon: React.SFC<IconProps> = ({ altText }) => {
  const icon = require(`assets/svgs/user.svg`);

  return (
    <>
      <img alt={altText} src={icon} />
    </>
  );
}

export default Icon;