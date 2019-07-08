import _ from 'lodash';

import Neighbourhood from "objects/neighbourhood";
import Restaurant from "objects/restaurant.js";
import Tag from "objects/tag";

export const deserializeTags = (restaurants: Restaurant[], tagInput: string[]) => {
  if (!tagInput) return [];
  return tagInput.filter((t) => t.length).map((tag): Tag => ({ title: tag, restaurants }));
}

export const deserializeRestaurant = (restaurants: Restaurant[], restaurant: any) => ({
  id: restaurant.id,
  name: restaurant.name,
  imageUrl: restaurant.image,
  price: restaurant.price,
  tags: deserializeTags(restaurants, restaurant.tags)
});

export const filterByTag = (restaurants: Restaurant[], tag: Tag) => {
  return restaurants.filter((r: Restaurant) => {
    return tagsToStringArray(r.tags).includes(tag.title);
  });
}

const tagsToStringArray = (tags: Tag[]): string[] => {
  return tags.map((t: Tag) => t.title);
};

export const collectTags = (restaurants: Restaurant[]) : Tag[] => {
  const tags = restaurants.map((r: Restaurant) => {
    return r.tags;
  });

  const flattened = _.flatten(tags);
  const uniq = _.uniqBy(flattened, (i) => i.title);

  const withRestaurantCount = uniq.map((tag: Tag) => {
    return { ...tag, restaurantCount: restaurants.filter((r: Restaurant) => tagsToStringArray(r.tags).includes(tag.title)).length }
  })
  return withRestaurantCount;
}

const deserialize = (json: any) : Neighbourhood => {
  const restaurants = json.restaurants.map(
    (restaurant: Record<string, any>) : Restaurant => deserializeRestaurant(restaurants, restaurant));

  return {
    title: json.neighborhood,
    restaurants
  };
};

export default (json: Record<string, any>) : Neighbourhood => deserialize(json);
