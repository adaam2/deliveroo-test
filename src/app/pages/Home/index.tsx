import React from "react";

import { Nav } from "ui";
import Neighbourhood from "objects/neighbourhood";

export interface HomeProps {
  neighbourhood?: Neighbourhood;
}

const Home: React.SFC<HomeProps> = ({ neighbourhood }) => {
  return (
    <div>
      <Nav />
    </div>
  );
}

export default Home;