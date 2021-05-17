import React from 'react';
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TodoDetail from './TodoDetail';


const TodoApp = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/:id">
                    <TodoDetail />
                </Route>
            </Switch>
        </div>
    </Router>

  );

export default TodoApp;

