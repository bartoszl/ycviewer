import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ItemTile } from '../Item/components';

Enzyme.configure({ adapter: new Adapter() });

describe('CommentItemTile', () => {
  it('should contain correct item properties displayed', () => {
    const by = 'me';
    const text = 'asd';
    const title = 'asda';
    const wrapper = shallow(
      <ItemTile
        item={{
          by,
          text,
          title,
        }}
      />,
    );

    expect(wrapper.find('h3').text()).toEqual(title);
    wrapper.unmount();
  });
});
