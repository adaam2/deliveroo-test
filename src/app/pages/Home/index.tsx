import React from "react";

import { Nav, Title, Container, P, Spacer, CardList, ImageCard } from "ui";
import Neighbourhood from "objects/neighbourhood";
import AccentedHeader from "app/components/ui/AccentedHeader";
import { FontWeight } from "app/components/ui/Typography";

export interface HomeProps {
  neighbourhood: Neighbourhood;
}

const Home: React.SFC<HomeProps> = ({ neighbourhood }) => {
  return (
    <div>
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
              <ImageCard altText={restaurant.name} imageUrl={restaurant.imageUrl}>
                <Title fontWeight={FontWeight.Bold} fontSize={22} colour="#2e33333">
                  {restaurant.name}
                </Title>
              </ImageCard>
            );
          })}
        </CardList>
      </Container>
    </div>
  );
}

export default Home;