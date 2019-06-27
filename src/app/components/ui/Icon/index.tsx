import React, { useState, useEffect } from 'react';

export interface IconProps {
  iconKey: string; // the file name portion
}

const Icon: React.SFC<IconProps> = ({ iconKey }) => {
  const icon = require(`assets/svgs/${iconKey}.svg`);

  return (
    <div>
      <img src={icon} />
    </div>
  );
}

export default Icon;