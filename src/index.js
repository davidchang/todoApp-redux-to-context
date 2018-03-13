import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import TodosProvider from './providers/todosProvider';
import VisibilityFilterProvider from './providers/visibilityFilterProvider';

render(
  <TodosProvider>
    <VisibilityFilterProvider>
      <App />
    </VisibilityFilterProvider>
  </TodosProvider>,
  document.getElementById('root'),
);
