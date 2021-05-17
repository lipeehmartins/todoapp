import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todoAppTypes'

const todo = (state, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          id: action.id,
          text: action.text,
          completed: false,
          addedOn: action.addedOn,
        };
      case TOGGLE_TODO:
        if (state.index !== action.playload) {
          return state;
        }
        return {
          ...state,
          completed: !state.completed
        };
      // case DELETE_TODO:
      //   return {
      //     ...state
      //   }
      default:
        return state;
    }
  };

export default todo;