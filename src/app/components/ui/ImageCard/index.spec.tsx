import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { ImageCard } from "ui";

let wrapper: ShallowWrapper;

function setup(
  imageUrl: string,
  children: any,
  altText: string
) {
  return shallow(
    <ImageCard
      imageUrl={imageUrl}
      children={children}
      altText={altText}
    />
  );
};

describe('<ImageCard />', () => {
  beforeEach(() => {
    wrapper = setup(
      "http://placehold.it/240",
      <div className="child">Hello</div>,
      "Some alt text"
    );
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the placeholder image', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toEqual('http://placehold.it/240');
  });

  it('renders the alt text', () => {
    const img = wrapper.find('img');

    expect(img.prop('alt')).toEqual('Some alt text');
  });

  it('renders the expected children', () => {
    const div = wrapper.find('div.child');

    expect(div.text()).toEqual('Hello');
  });
});
