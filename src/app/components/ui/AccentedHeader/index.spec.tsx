import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import AccentedHeader from './';
import { Container } from "ui";

let wrapper: ShallowWrapper;
let dummyNode = (
  <>
    <p>
      Hello this is some text
    </p>
  </>
);

function setup(children: any, className: string = "") {
  return shallow(
    <AccentedHeader className={className}>
      {children}
    </AccentedHeader>
  );
}

describe('<AccentedHeader', () => {
  beforeEach(() => {
    wrapper = setup(
      dummyNode
    )
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('With a custom class name applied', () => {
    beforeEach(() => {
      wrapper = setup(
        dummyNode,
        "myCustomCssClass"
      )
    });

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders the custom class name on the container as an additional class', () => {
      const container = wrapper.find(Container);

      expect(container.html())
        .toEqual(expect.stringContaining("myCustomCssClass"))
    });
  });
});