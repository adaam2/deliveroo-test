import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Nav, AccentedHeader, Spacer, Title, Button, ButtonType } from "ui";

export interface RestaurantProps extends RouteComponentProps {

}

const Restaurant: React.SFC<RestaurantProps> = () => {
  return (
    <div className="Restaurant">
      <Nav />

      <AccentedHeader>
        <Title colour="white">
          Restaurant title
        </Title>
      </AccentedHeader>

      <Spacer height={10} />
    </div>
  );
}

export default Restaurant;