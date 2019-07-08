import React from 'react';

import { Container, CardList, Spacer, P, RestaurantCard } from "ui";
import Restaurant from 'objects/restaurant';

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList: React.SFC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <Container>
      <Spacer height={40} />
      <P fontSize={16} colour="#828585">{restaurants.length} Restaurants</P>
      <Spacer height={40} />

      <CardList>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          );
        })}
      </CardList>
    </Container>
  );
}

export default RestaurantList;