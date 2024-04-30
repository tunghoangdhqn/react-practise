import { SET_TODO_INPUT, ADD_TODO_TASK } from './Constains';

export const setTodoInput = payload => {
  return {
    type: SET_TODO_INPUT,
    payload
  };
};


export const addTodoTask = payload => {
  return {
    type: ADD_TODO_TASK,
    payload
  };
};