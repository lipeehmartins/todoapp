import { SET_VISIBILITY_FILTER } from './todoAppTypes';

const visibilityFilter = (state = 'SHOW ALL', action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default: 
        return state;
    }
}

export default visibilityFilter;