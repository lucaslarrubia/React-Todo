import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: "Meet MVP",
    id: 184572487238472,
    completed: false 
  },
  {
    task: "Do stretch assignment",
    id: 298237648237408,
    completed: false
  },
  {
    task: "Review TK for next lecture",
    id: 39834758454834,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTodo = (e, task) => {
    e.preventDefault();

    const newTodo = {
      name: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTodo = todoId => {
    console.log(todoId);

    this.setState({
      todos: this.state.todos.map(task => {
        console.log(task);
        if (todoId === task.id) {
          return {
            ...task, 
            completed: !task.completed
          };
        }

        return task;
      })
    });
  }

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(task => task.completed === false)
    });
  }
  
  render() {
console.log("rendering...")

    return (
      <div className="App">
        <div className="header">
           <h2>Welcome to your Todo App!</h2>
           <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
        todos={this.state.todos}
        toggleTodo={this.toggleTodo}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
