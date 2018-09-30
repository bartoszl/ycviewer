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
    case STORIES.REQUEST_SINGLE:
      return {
        ...state,
        isFetchingSingle: true,
      };
    case STORIES.REQUEST_SINGLE_SUCCESS:
      return {
        ...state,
        isFetchingSingle: false,
        record: action.record,
      };
    case STORIES.REQUEST_SINGLE_FAILURE:
      return {
        ...state,
        isFetchingSingle: false,
      };
    default:
      return state;
  }
};
