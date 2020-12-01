import React from 'react';
import { shallow } from 'enzyme';

import { ToDoList } from './ToDoList';

test('ToDoList renders without errors', () => {
  shallow(<ToDoList />);
});