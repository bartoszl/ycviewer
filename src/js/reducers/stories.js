import { STORIES } from '../actions/types';

const initialState = {
  isFetching: false,
  isFetchingSingle: false,
  records: [],
  record: null,
  numberOfRecords: 500,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORIES.REQUEST_LIST:
      return {
        ...state,
        isFetching: true,
      };
    case STORIES.REQUEST_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        records: action.records,
        numberOfRecords: action.numberOfRecords,
      };
    case STORIES.REQUEST_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
