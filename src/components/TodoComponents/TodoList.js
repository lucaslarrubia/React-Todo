// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props);
    return (
        <div className="todoList">
            {props.todos.map(task => (
                <Todo id={task.id} task={task} toggleTodo={props.toggleTodo} />
            ))}
            <button className="clearButton" onClick={props.clearCompleted}>
            Clear Completed 
            </button>
        </div>
    );
};

export default TodoList;