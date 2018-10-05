import reducer from '../stories';
import { STORIES } from '../../actions/types';

describe('stories reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        isFetching: false,
        isFetchingSingle: false,
        records: [],
        record: null,
        numberOfRecords: 500,
      });
  });

  it(`should change state on ${STORIES.REQUEST_LIST}`, () => {
    expect(reducer({}, {
      type: STORIES.REQUEST_LIST,
    }))
      .toEqual({
        isFetching: true,
      });
  });

  it(`should change state on ${STORIES.REQUEST_LIST_SUCCESS}`, () => {
    const records = 'records';
    const numberOfRecords = 123;
    expect(reducer({}, {
      type: STORIES.REQUEST_LIST_SUCCESS,
      records,
      numberOfRecords,
    }))
      .toEqual({
        isFetching: false,
        records,
        numberOfRecords,
      });
  });

  it(`should change state on ${STORIES.REQUEST_LIST_FAILURE}`, () => {
    expect(reducer({}, {
      type: STORIES.REQUEST_LIST_FAILURE,
    }))
      .toEqual({
        isFetching: false,
      });
  });
});
