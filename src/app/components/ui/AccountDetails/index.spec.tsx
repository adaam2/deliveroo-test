import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { AccountDetails } from "ui";

let wrapper: ShallowWrapper;

function setup(
  userName: string
) {
  return shallow(
    <AccountDetails userName={userName} />
  );
};

describe('<AccountDetails />', () => {
  beforeEach(() => {
    wrapper = setup("Adam Bull");
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the users name', () => {
    expect(wrapper.html())
      .toEqual(expect.stringContaining('Adam Bull'));
  });

  it('renders the user icon', () => {
    expect(wrapper.html())
      .toEqual(expect.stringContaining('user.svg'));
  });
});
