import React from 'react';
import { shallow } from 'enzyme';

import CreateToDo from './CreateToDo';

test('renders without errors', () => {
  shallow(<CreateToDo />);
});