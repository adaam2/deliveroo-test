import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { CardList } from "ui";

let wrapper: ShallowWrapper;

function setup(
  children: any
) {
  return shallow(
    <CardList>
      {children}
    </CardList>
  );
};

describe('<AccountDetails />', () => {
  beforeEach(() => {
    wrapper = setup(
      <div>
        A child
      </div>
    );
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the expected children', () => {
    const children = wrapper.children();

    expect(children.html())
      .toEqual(expect.stringContaining('<div>A child</div>'));
  });
});
