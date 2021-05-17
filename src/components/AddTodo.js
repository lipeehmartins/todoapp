import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/todosApp/todoAppAction';

let AddTodo = ({ dispatch }) => {
    let input;
  
    return (
      <div className="addTodo">
        <h1>Todo</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()){
              return;
            }
            dispatch(addTodo(input.value, new Date().toUTCString()));
            input.value = '';
          }}>
            
          <div className="input">
          <input ref={node => {
            input = node;
          }} type="text" placeholder="What are your plans?" required  className="input_addTodo"/>
          <button className="addTodo_button">
            Add Todo
          </button>

          </div>
        </form>
        <div className="h3_addTodo"> 
         <h3 className="AddTodo_h3">Status</h3><h3 className="AddTodo_h3">Todos</h3><h3 className="AddTodo_h3">Added On</h3>
        </div>
      </div>
    );
  };
  export default connect()(AddTodo);