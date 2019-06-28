import React from 'react';
import { mount, ReactWrapper } from "enzyme";

import { RestaurantCard, ImageCard, Title, P } from "ui";
import Restaurant from 'objects/restaurant';

let wrapper: ReactWrapper;

const restaurant: Restaurant = {
  name: "Adam's restaurant",
  imageUrl: "http://placehold.it/240",
  id: "1234",
  price: 2,
  tags: [
    {
      title: "Pizza"
    },
    {
      title: "Burgers"
    }
  ]
};

function setup(
  restaurant: Restaurant
) {
  return mount(
    <RestaurantCard {...restaurant} />
  );
}

describe('<Logo />', () => {
  beforeEach(() => {
    wrapper = setup(restaurant);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an Image Card', () => {
    const imageCard = wrapper.find(ImageCard);

    expect(imageCard).not.toBeNull();
  });

  it('renders the restaurant title', () => {
    const imageCard = wrapper.find(ImageCard);
    const title = imageCard.find(Title);

    expect(title.text()).toEqual(restaurant.name);
  });

  it('renders the expected tag list', () => {
    const imageCard = wrapper.find(ImageCard);
    const subText = imageCard.find(P);

    expect(subText.html())
      .toEqual(expect.stringContaining('Pizza • Burgers'));
  });

  it('renders the price level', () => {
    const imageCard = wrapper.find(ImageCard);
    const subText = imageCard.find(P);

    expect(subText.html()).toEqual(expect.stringContaining('££'));
  });
});
