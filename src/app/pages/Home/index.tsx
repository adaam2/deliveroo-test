import React from "react";

import { Nav, Title, Container, P, Spacer, CardList } from "ui";
import RestaurantCard from "components/RestaurantCard";
import Neighbourhood from "objects/neighbourhood";
import AccentedHeader from "app/components/ui/AccentedHeader";

export interface HomeProps {
  neighbourhood: Neighbourhood;
}

const Home: React.SFC<HomeProps> = ({ neighbourhood }) => {
  return (
    <div className="Home">
      <Nav />

      <AccentedHeader>
        <P fontSize={16} colour="black">
          Location
        </P>

        <Title fontSize={34} colour="white">
          {neighbourhood.title}
        </Title>
      </AccentedHeader>

      <Spacer height={25} />

      <Container>
        <P fontSize={16} colour="#828585">{neighbourhood.restaurants.length} restaurants</P>
        <Spacer height={20} />
        <CardList>
          {neighbourhood.restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant} />
            );
          })}
        </CardList>
      </Container>
    </div>
  );
}

export default Home;