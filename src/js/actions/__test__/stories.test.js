import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { STORIES } from '../types';
import { getList, requestList } from '../stories';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('stories action', () => {
  it('creates correct requestList action', () => {
    expect(requestList()).toEqual({
      type: STORIES.REQUEST_LIST,
    });
  });

  it('calls correct actions when getList() is successful', async () => {
    const records = ['a', 'b'];
    axios.get.mockReturnValue(Promise.resolve({ data: records }));

    const expectedActions = [
      { type: STORIES.REQUEST_LIST },
      { type: STORIES.REQUEST_LIST_SUCCESS, records, numberOfRecords: records.length },
    ];
    const store = mockStore({ records: [] });

    return store.dispatch(getList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('calls correct actions when getList() fails', async () => {
    axios.get.mockReturnValue(Promise.reject(new Error({ error: 'error' })));

    const expectedActions = [
      { type: STORIES.REQUEST_LIST },
      { type: STORIES.REQUEST_LIST_FAILURE },
    ];
    const store = mockStore({ records: [] });

    return store.dispatch(getList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
