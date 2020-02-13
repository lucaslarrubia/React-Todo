import React from 'react';

const Todo = props => {
console.log(props);

    return (
        <div
        onClick={() => props.toggleTodo(props.task.id)}
        >
        <p>{props.task.name}</p>
        </div>
    );
};

export default Todo;