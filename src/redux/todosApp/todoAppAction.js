import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './todoAppTypes';

let nextTodoId = 0;
export const addTodo = (text, addedOn) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    addedOn,
    text
  };
};

// export const delete_Todo = index => {
//   return {
//     type: DELETE_TODO,
//     payload: index
//   };
// };

export const toggleTodo = (id) => {
    return { 
        type: TOGGLE_TODO,
        id
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
};

