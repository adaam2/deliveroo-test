import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { Logo } from "ui";

let wrapper: ShallowWrapper;

describe('<Logo />', () => {
  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the deliveroo logo', () => {
    const img = wrapper.find('img');

    expect(img.prop('src'))
      .toEqual('logo-horizontal.svg');
  });
});
