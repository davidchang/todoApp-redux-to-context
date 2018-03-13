import React from 'react';
import TodoList from '../components/TodoList';
import { VisibilityFilterContext } from '../providers/visibilityFilterProvider';
import { TodosContext } from '../providers/todosProvider';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const VisibleTodoList = () => {
  return (
    <TodosContext.Consumer>
      {({ todos, toggleTodo }) => (
        <VisibilityFilterContext.Consumer>
          {({ visibilityFilter }) => (
            <TodoList
              onTodoClick={toggleTodo}
              todos={getVisibleTodos(todos, visibilityFilter)}
            />
          )}
        </VisibilityFilterContext.Consumer>
      )}
    </TodosContext.Consumer>
  );
};

export default VisibleTodoList;
