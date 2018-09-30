import axios from 'axios';

import { STORIES } from './types';
import { API_URLS } from '../constants';

const requestList = filters => ({
  type: STORIES.REQUEST_LIST,
  filters,
});

const requestListSuccess = (records, numberOfRecords = 100) => ({
  type: STORIES.REQUEST_LIST_SUCCESS,
  records,
  numberOfRecords,
});

const requestListFailure = () => ({
  type: STORIES.REQUEST_LIST_FAILURE,
});

export const getList = filters => (dispatch) => {
  dispatch(requestList(filters));

  return axios.get(API_URLS.NEW_STORIES)
    .then((result) => {
      dispatch(requestListSuccess(result.data.slice(0, 10)));
    })
    .catch(err => dispatch(requestListFailure(err)));
};