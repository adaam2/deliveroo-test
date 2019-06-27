import React from "react";

import { Nav, Title, Container, P, Spacer } from "ui";
import Neighbourhood from "objects/neighbourhood";
import AccentedHeader from "app/components/ui/AccentedHeader";

export interface HomeProps {
  neighbourhood?: Neighbourhood;
}

const Home: React.SFC<HomeProps> = ({ neighbourhood }) => {
  return (
    <div>
      <Nav />

      <AccentedHeader>
        <P fontSize={16} colour="black">
          Location
        </P>
      </AccentedHeader>

      <Spacer />

      <Container>
        <Title>Hello</Title>
      </Container>
    </div>
  );
}

export default Home;