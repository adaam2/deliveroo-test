import React from 'react';

import { ImageCard, Title, P, Spacer } from 'ui'
import Restaurant from 'objects/restaurant';
import { FontWeight } from '../ui/Typography';

const RestaurantCard: React.SFC<Restaurant> = ({ id, name, imageUrl, price, tags }) => {
  const tagList = tags.map(t => t.title).join(" • ");

  const priceLevel = () => Array.from(Array(price)).map(() => '£').join("");

  return (
    <ImageCard altText={name} imageUrl={imageUrl}>
      <Spacer height={8} />
      <Title fontWeight={FontWeight.Bold} fontSize={22} colour="#2e33333">
        {name}
      </Title>
      <Spacer height={5} />
      <P fontWeight={FontWeight.Regular} fontSize={14} colour="#828585">
        {tagList} {tagList.length > 0 ? '•' : null} {priceLevel()}
      </P>
    </ImageCard>
  );
}

export default RestaurantCard;