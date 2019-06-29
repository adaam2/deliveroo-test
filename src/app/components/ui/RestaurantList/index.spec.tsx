import React from 'react';
import { mount, ReactWrapper } from "enzyme";

import { RestaurantList } from "ui";
import Neighbourhood from 'objects/neighbourhood';
import RestaurantCard from '../RestaurantCard';
import { StaticRouter as Router } from 'react-router';

let wrapper: ReactWrapper;

let neighbourhood : Neighbourhood = {
  title: "Shoreditch",
  restaurants: [
    {
      name: "One",
      imageUrl: "http://placehold.it/240",
      price: 1,
      id: "123",
      tags: []
    },
    {
      name: "Two",
      imageUrl: "http://placehold.it/240",
      price: 2,
      id: "234",
      tags: []
    }
  ]
}

function setup(
  neighbourhood: Neighbourhood
) {
  return mount(
    <Router>
      <RestaurantList neighbourhood={neighbourhood} />
    </Router>
  );
};

describe('<RestaurantList />', () => {
  beforeEach(() => {
    wrapper = setup(neighbourhood);
  });

  describe('When the neighbourhood has restaurants', () => {
    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders the expected number of restaurant cards', () => {
      const cards = wrapper.find(RestaurantCard);

      expect(cards.length).toEqual(2);
    });

    it('renders the restaurant count', () => {
      expect(wrapper.html())
        .toEqual(expect.stringContaining('2 Restaurants'))
    });
  });

  describe('When the neighbourhood has no restaurants', () => {
    beforeEach(() => {
      neighbourhood = {
        title: "No food for me :(",
        restaurants: []
      };

      wrapper = setup(neighbourhood);
    });

    it('doesnt render any cards', () => {
      const cards = wrapper.find(RestaurantCard);

      expect(cards.length).toEqual(0);
    });

    it('renders the "0 Restaurants" text', () => {
      expect(wrapper.html())
        .toEqual(expect.stringContaining("0 Restaurants"));
    });

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
