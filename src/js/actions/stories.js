import axios from 'axios';

import { STORIES } from './types';
import { API_URLS } from '../constants';

const requestList = () => ({
  type: STORIES.REQUEST_LIST,
});

const requestListSuccess = (records, numberOfRecords) => ({
  type: STORIES.REQUEST_LIST_SUCCESS,
  records,
  numberOfRecords,
});

const requestListFailure = () => ({
  type: STORIES.REQUEST_LIST_FAILURE,
});

export const getList = type => (dispatch) => {
  dispatch(requestList());

  return axios.get(API_URLS[type])
    .then((result) => {
      const { data } = result;

      dispatch(requestListSuccess(data, data.length));
    })
    .catch(err => dispatch(requestListFailure(err)));
};
