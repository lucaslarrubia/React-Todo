import React, { Component } from 'react';
import App from '../../App';

class TodoForm extends Component {
    constructor() {
        super();

        this.state = {
            task: ""
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(e, this.state.task);
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input type="text" name="todo" onChange={this.handleChange} />
                <button>Add Todo</button>
            </form>
        );
    };
};

export default TodoForm;