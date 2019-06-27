import data from "../../../data/restaurants.json"

import Neighbourhood from "objects/neighbourhood";
import Restaurant from "objects/restaurant.js";
import Tag from "objects/tag";

const deserializeTags = (tagInput: string[]) => {
  return tagInput.map((tag): Tag => ({ title: tag }));
}

const deserialize = () : Neighbourhood => {
  const restaurants = data.restaurants.map(
    (restaurant) : Restaurant => ({
      id: restaurant.id,
      name: restaurant.name,
      imageUrl: restaurant.image,
      price: restaurant.price,
      tags: deserializeTags(restaurant.tags)
  }));

  return {
    title: data.neighborhood,
    restaurants
  };
}

export default () : Neighbourhood => deserialize();
