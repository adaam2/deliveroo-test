import React, { useState, useEffect } from 'react';

export interface IconProps {
  iconKey: string; // the file name portion
  altText?: string;
}

const Icon: React.SFC<IconProps> = ({ iconKey, altText = iconKey }) => {
  const icon = require(`assets/svgs/${iconKey}.svg`);

  return (
    <>
      <img alt={altText} src={icon} />
    </>
  );
}

export default Icon;