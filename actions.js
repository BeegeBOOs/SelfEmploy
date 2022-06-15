import * as types from './types';
import axios from 'axios';

export const GetTaskFetch = (url, config = {}) => {
  return async (dispatch) => {
    await axios.get(url, config).then((data) => {
      console.log('AxiosQuery GetTaskFetch', data.data);
      dispatch({ type: types.TASK, payload: { tasksData: data.data.data } });
    });
  };
};