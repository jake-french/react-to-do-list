import React from 'react';
import { shallow } from 'enzyme';

import ToDoItem from './';

test('renders without crashing', () => {
  shallow(<ToDoItem />);
})