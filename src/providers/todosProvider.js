import React from 'react';
import createReactContext from 'create-react-context';

export const TodosContext = createReactContext({ todos: [] });

let id = 0;

export default class TodosProvider extends React.Component {
  state = { todos: [] };

  addTodo = text => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: id++,
          text,
          completed: false,
        },
      ],
    });
  };

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    });
  };

  render() {
    return (
      <TodosContext.Provider
        value={{
          ...this.state,
          addTodo: this.addTodo,
          toggleTodo: this.toggleTodo,
        }}
      >
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}
