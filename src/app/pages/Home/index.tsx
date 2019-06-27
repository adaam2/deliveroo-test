import React from "react";
import Neighbourhood from "objects/neighbourhood";

export interface HomeProps {
  neighbourhood: Neighbourhood;
}

const Home: React.SFC<HomeProps> = ({ neighbourhood }) => {
  return (
    <div>
      Home
    </div>
  );
}

export default Home;