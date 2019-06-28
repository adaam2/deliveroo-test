import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { Nav, Logo, AccountDetails } from "ui";

let wrapper: ShallowWrapper;

describe('<Nav />', () => {
  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the Logo component', () => {
    const logo = wrapper.find(Logo);

    expect(logo).not.toBeNull();
  });

  it('renders the account details component with the correct user name', () => {
    const account = wrapper.find(AccountDetails);

    expect(account).not.toBeNull();
    expect(account.prop('userName')).toEqual('Adam Bull');
  });
});
