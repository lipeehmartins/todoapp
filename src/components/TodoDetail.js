import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux';

const TodoDetail = ({ todos, }) => {
    const { id } = useParams();
    const todo = todos.find((todo) => todo.id === parseInt(id));
  if (!todo) {
    return <div>
      <p className="whoops"> Whoops!</p>
        <Link to={"/"}>
          <button className="whoops_goback">Go Back</button>
        </Link>
      </div>
  }

    return (
        <div className="TodoDetail">
            <h1 className="TodoDetail_h1">Todo Details</h1>
            <h3 className="TodoDetail_completed" style={ todo.completed ? {backgroundColor: 'green'} : {backgroundColor: "red"}}>{todo.completed ?  "Done" : "Pending"}</h3>
            <h3 className="TodoDetail_todo">{todo.text}</h3>
            <h3 className="TodoDetail_addedOn" >{todo.addedOn}</h3>
            <br/>
            <br/>
            <Link to={"/"}>
                <button className="TodoDetail_goBack">Go Back</button>
            </Link>
        </div>
        )
};


  const mapStateToTodoProps = (state) => {
    return {
      todos: state.todos
    };
  };

export default connect(mapStateToTodoProps)(TodoDetail)