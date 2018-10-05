import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';

import Item from '../Item';
import { ItemTile, CommentItemTile } from '../Item/components';
import { ITEM_TYPE } from '../../constants';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('Item', () => {
  it('renders no children if renderChildren prop is set to false', async () => {
    const item = {
      title: 'title',
      by: 'me',
    };
    axios.get.mockReturnValue(Promise.resolve({
      data: item,
    }));

    const wrapper = await shallow(
      <Item renderKids={false} itemId={1} />,
    );

    const itemTile = wrapper.find(ItemTile);

    // console.log(wrapper.html());
    expect(wrapper.find('styled.ul').children().length).toEqual(0);
    expect(itemTile.props().item).toEqual(item);
    expect(itemTile.length).toEqual(1);
    expect(wrapper.state().item).toEqual(item);
    wrapper.unmount();
  });

  it('renders no children if request doesnt return any kids', async () => {
    const item = {
      title: 'title',
      by: 'me',
    };
    axios.get.mockReturnValue(Promise.resolve({
      data: item,
    }));

    const wrapper = await shallow(
      <Item itemId={1} />,
    );

    const itemTile = wrapper.find(ItemTile);

    expect(wrapper.find('styled.ul')).toBeTruthy();
    expect(wrapper.find('h3').text()).toBeTruthy();
    expect(wrapper.state().item).toEqual(item);
    expect(itemTile.props().item).toEqual(item);
    expect(itemTile.length).toEqual(1);
    wrapper.unmount();
  });

  it('renders ItemTile nested children', async () => {
    const item = {
      title: 'title',
      by: 'me',
      kids: [123, 321],
    };
    axios.get.mockReturnValueOnce(Promise.resolve({
      data: item,
    }));

    const wrapper = await shallow(
      <Item itemId={1} />,
    );

    const itemTile = wrapper.find(ItemTile);
    const items = wrapper.find(Item);

    expect(itemTile.props().item).toEqual(item);
    expect(itemTile.length).toEqual(1);

    expect(wrapper.find(Item).length).toEqual(2);
    expect(items.first().props().itemId).toEqual(123);
    expect(items.last().props().itemId).toEqual(321);

    expect(wrapper.find('h3').text()).toBeTruthy();

    expect(wrapper.state().item).toEqual(item);
    wrapper.unmount();
  });

  it('renders CommentItemTile if item type is `comment`', async () => {
    const item = {
      title: 'title',
      by: 'me',
      type: ITEM_TYPE.COMMENT,
    };
    axios.get.mockReturnValue(Promise.resolve({
      data: item,
    }));

    const wrapper = await shallow(
      <Item itemId={1} />,
    );

    const commentTile = wrapper.find(CommentItemTile);

    expect(wrapper.find('styled.ul')).toBeTruthy();
    expect(wrapper.find('h3').text()).toBeTruthy();
    expect(wrapper.state().item).toEqual(item);
    expect(commentTile.props().item).toEqual(item);
    expect(commentTile.length).toEqual(1);
    wrapper.unmount();
  });
});
