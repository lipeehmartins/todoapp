import { combineReducers } from 'redux';
import todos from './todosApp/todos';
import visibilityFilter from './todosApp/visibilityFilter';


const rootReducer = combineReducers({
    todos,
    visibilityFilter,
})

export default rootReducer