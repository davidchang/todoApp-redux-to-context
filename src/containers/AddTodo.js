import React from 'react';
import { TodosContext } from './../providers/todosProvider';

let AddTodo = () => {
  let input;

  return (
    <TodosContext.Consumer>
      {({ addTodo }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              addTodo(input.value);
              input.value = '';
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </TodosContext.Consumer>
  );
};

export default AddTodo;
