import { ADD_TODO_TASK, SET_TODO_INPUT } from "./Constains";


const initState = {
  todos: [],
  todoInput: ''
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      };

    case ADD_TODO_TASK:
      let newTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: newTodos
      };
    default:
      throw new Error('invalid action');
  }
}

export { initState };
export default reducer;