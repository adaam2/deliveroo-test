import data from "../../../data/restaurants.json"

import Neighbourhood from "objects/neighbourhood";
import Restaurant from "objects/restaurant.js";
import Tag from "objects/tag";

export const deserializeTags = (tagInput: string[]) => {
  if (!tagInput) return [];
  return tagInput.filter((t) => t.length).map((tag): Tag => ({ title: tag }));
}

export const deserializeRestaurant = (restaurant: any) => ({
  id: restaurant.id,
  name: restaurant.name,
  imageUrl: restaurant.image,
  price: restaurant.price,
  tags: deserializeTags(restaurant.tags)
});

const deserialize = () : Neighbourhood => {
  const restaurants = data.restaurants.map(
    (restaurant) : Restaurant => deserializeRestaurant(restaurant));

  return {
    title: data.neighborhood,
    restaurants
  };
};

export default () : Neighbourhood => deserialize();
