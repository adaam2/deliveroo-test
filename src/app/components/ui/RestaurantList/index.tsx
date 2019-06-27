import React from 'react';

import { Container, CardList, Spacer, P, RestaurantCard } from "ui";
import Neighbourhood from 'objects/neighbourhood';

interface RestaurantListProps {
  neighbourhood: Neighbourhood;
}

const RestaurantList: React.SFC<RestaurantListProps> = ({ neighbourhood }) => {
  return (
    <Container>
      <Spacer height={40} />
      <P fontSize={16} colour="#828585">{neighbourhood.restaurants.length} Restaurants</P>
      <Spacer height={40} />

      <CardList>
        {neighbourhood.restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          );
        })}
      </CardList>
    </Container>
  );
}

export default RestaurantList;