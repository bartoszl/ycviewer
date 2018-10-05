import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StoriesList } from '../StoriesList';
import Item from '../../components/Item';
import { STORIES_TYPE } from '../../constants';

Enzyme.configure({ adapter: new Adapter() });

const mockProps = {
  records: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  getStories: jest.fn(),
  match: {
    params: {
      page: 1,
    },
  },
  history: {
    push: jest.fn(),
  },
  numberOfRecords: 100,
  isFetching: true,
  storyType: STORIES_TYPE.NEW_STORIES,
};

describe('StoriesList', () => {
  beforeEach(() => {
    mockProps.getStories.mockClear();
    mockProps.history.push.mockClear();
  });

  it('set perPage state to 10 in constructor', async () => {
    const wrapper = await shallow(
      <StoriesList {...mockProps} />,
    );

    expect(wrapper.state().perPage).toEqual(10);
    wrapper.unmount();
  });

  it('calls getStories on componentDidMount', async () => {
    const wrapper = await shallow(
      <StoriesList {...mockProps} />,
    );

    expect(mockProps.getStories.mock.calls.length).toBe(1);
    wrapper.unmount();
  });

  it('calls getStories on componentDidMount and componentDidUpdate', async () => {
    const wrapper = await shallow(
      <StoriesList {...mockProps} />,
    );

    wrapper.setProps({
      match: {
        params: {
          page: 2,
        },
      },
    });

    expect(mockProps.getStories.mock.calls.length).toBe(2);
    wrapper.unmount();
  });

  it('renders loader when isFetching props is set to true', async () => {
    const wrapper = await shallow(
      <StoriesList {...mockProps} />,
    );

    const h1 = wrapper.find('h1');

    expect(h1.length).toEqual(1);
    expect(h1.text()).toEqual('Loading...');
    wrapper.unmount();
  });

  it('renders maximum of 10 Items', async () => {
    const props = {
      ...mockProps,
      isFetching: false,
    };
    const wrapper = await shallow(
      <StoriesList {...props} />,
    );

    const items = wrapper.find(Item);

    expect(items.length).toEqual(10);
    wrapper.unmount();
  });

  it('renders pagination', async () => {
    const props = {
      ...mockProps,
      isFetching: false,
    };
    const wrapper = await shallow(
      <StoriesList {...props} />,
    );

    const pagination = wrapper.find('a');

    expect(pagination).toBeTruthy();
    wrapper.unmount();
  });
});
