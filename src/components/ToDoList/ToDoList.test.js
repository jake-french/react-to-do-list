import React from 'react';
import { render } from '@testing-library/react';

import { ToDoList } from './ToDoList';

test('ToDoList renders without errors', () => {
  render(<ToDoList />);
})