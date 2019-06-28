import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { Icon } from "ui";

let wrapper: ShallowWrapper;

describe('<Icon />', () => {
  beforeEach(() => {
    wrapper = shallow(<Icon />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the user icon', () => {
    expect(wrapper.html()).toEqual(expect.stringContaining('user.svg'));
  });
});
