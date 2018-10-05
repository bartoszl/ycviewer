import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CommentItemTile } from '../Item/components';

Enzyme.configure({ adapter: new Adapter() });

describe('CommentItemTile', () => {
  it('should be null if item props is `deleted`', () => {
    const wrapper = shallow(
      <CommentItemTile item={{ deleted: true }} />,
    );

    expect(wrapper.html()).toEqual(null);
    wrapper.unmount();
  });

  it('should contain correct item properties displayed', () => {
    const by = 'me';
    const text = 'asd';
    const wrapper = shallow(
      <CommentItemTile
        item={{
          by,
          text,
        }}
      />,
    );

    expect(wrapper.find('span').text()).toEqual(by);
    expect(wrapper.find('p').text()).toEqual(text);
    wrapper.unmount();
  });
});
