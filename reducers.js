import { combineReducers } from 'redux';
import * as types from './types';

const tasksInitial = {
  tasks: [],
};

const taskReducer = (state = tasksInitial, { type, payload }) => {
  console.log('payload', payload);
  switch (type) {
    case types.TASK:
      // console.log('type', type);
      return { ...state, tasks: payload.tasksData };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  tasks: taskReducer,
};

export default combineReducers(reducers);
