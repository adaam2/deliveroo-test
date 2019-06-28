import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import { Button } from "ui";
import { ButtonType } from '.';

let wrapper: ShallowWrapper;

const onClickMock = jest.fn();

function setup(
  children: any,
  ariaLabel?: string
) {
  return shallow(
    <Button ariaLabel={ariaLabel} type={ButtonType.Primary} onClick={onClickMock}>
      {children}
    </Button>
  );
};

describe('<Button />', () => {
  describe('Rendering', () => {
    beforeEach(() => {
      wrapper = setup(
        <span>Some extra button JSX</span>
      );
    });

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders the children', () => {
      const children = wrapper.children();

      expect(children.html()).toEqual('<span>Some extra button JSX</span>');
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      wrapper = setup(
        "Some text",
        "Some alternative aria text"
      );
    });

    it('renders some aria text for the button when the aria prop is passed', () => {
      expect(wrapper.html()).toEqual(expect.stringContaining('aria-label="Some alternative aria text"'));
    });
  });

  describe('OnClick handling', () => {
    it('triggers the onClick mock function when clicked', () => {
      wrapper.simulate('click');

      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
