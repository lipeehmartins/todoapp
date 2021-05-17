import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todoAppTypes'
import todo from './todo';

const todos = (state = [], action,) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          todo(undefined, action,)
        ];
      case TOGGLE_TODO:
        return state.map(todo =>
          todo.id == action.id ? {...todo, completed: !todo.completed} : todo
        );
        // case DELETE_TODO:
        //   return {
        //     todo:[
        //     ...state.filter(todos => todos.index !== action.payload)
        //     ]
        //   }    
      default:
        return state;
    }
  };

export default todos;