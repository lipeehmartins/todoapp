import React from 'react';
import {Link} from 'react-router-dom';


const Todo = ({ onClick, completed, text, id, addedOn}) => (
   
  <li className="li_Todo">
    <p onClick={onClick}
       readOnly className="p_Todo"
       style={ completed ? {backgroundColor: 'green'} : {backgroundColor: "red"}}>
      {completed ?  "Done" : "Pending"}
    </p>
    <Link to={'/'+id}>{text}</Link >
    <p className="addedOn">{addedOn}</p>
</li>
  
);

  
export default Todo;

