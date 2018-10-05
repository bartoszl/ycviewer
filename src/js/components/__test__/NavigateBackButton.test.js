import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavigateBackButton } from '../NavigateBackButton';

Enzyme.configure({ adapter: new Adapter() });

describe('NavigateBackButton', () => {
  it('Responds to click events correctly', () => {
    const history = {
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <NavigateBackButton history={history} />,
    );
    wrapper.find('button').simulate('click');
    expect(history.goBack.mock.calls.length).toBe(1);
    wrapper.unmount();
  });

  it('contains a span with correct text', () => {
    const history = {
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <NavigateBackButton history={history} />,
    );
    const span = wrapper.find('span');
    expect(span.text()).toEqual('Return');
    wrapper.unmount();
  });
});
