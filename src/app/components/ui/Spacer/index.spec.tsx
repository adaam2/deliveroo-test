import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { Spacer } from "ui";

let wrapper: ShallowWrapper;

function setup(
  height?: number
) {
  return shallow(
    <Spacer height={height} />
  );
};

describe('<AccountDetails />', () => {
  beforeEach(() => {
    wrapper = setup();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('With a custom height', () => {
    beforeEach(() => {
      wrapper = setup(100);
    });

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('has 100px height as an attribute', () => {
      expect(wrapper.html()).toEqual(expect.stringContaining("height:100px"))
    });
  });
});
