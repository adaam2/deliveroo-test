import React from 'react';
import { Link } from "react-router-dom";

import { ImageCard, Title, P, Spacer } from 'ui';
import Restaurant from 'objects/restaurant';
import { FontWeight } from '../Typography';

const RestaurantCard: React.SFC<Restaurant> = ({ id, name, imageUrl, price, tags }) => {
  const tagList = tags.map(t => t.title).join(" • ");

  const priceLevel = () => Array.from(Array(price)).map(() => '£').join("");

  return (
    <Link to={`/restaurants/${id}`}>
      <ImageCard altText={name} imageUrl={imageUrl}>
        <Spacer height={8} />
        <Title fontWeight={FontWeight.Bold} fontSize={22} colour="#2e33333">
          {name}
        </Title>
        <Spacer height={5} />
        <P fontWeight={FontWeight.Regular} fontSize={14} colour="#828585">
          {tagList} {tagList.length > 0 ? ' • ' : null} {priceLevel()}
        </P>
      </ImageCard>
    </Link>
  );
}

export default RestaurantCard;