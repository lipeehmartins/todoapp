
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/todosApp/todoAppAction';
import TodoList from './TodoList';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../redux/todosApp/todoAppTypes';
import TodoDetail from './TodoDetail';

const getVisibleTodos = (todos, filter) => {
  switch (filter) { 
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    case SHOW_ALL:
    default:
      return todos;
  }
  
};

const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, 
      state.visibilityFilter),
  };
};

const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

export const OneTodo = connect(mapStateToTodoListProps,
  mapDispatchToTodoListProps)(TodoDetail);

  const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

  export default VisibleTodoList;