import React from 'react';
import { mount, shallow } from 'enzyme';

import ToDoList from './';
import { createToDo } from '../../testUtils';

test('renders without errors', () => {
  shallow(<ToDoList />);
});

describe('list displays items correctly', () => {
  const items = [createToDo('A'), createToDo('B'), createToDo('C')];
  const wrapper = mount(<ToDoList items={items} />);

  test('list shows correct number of items', () => {
    expect(wrapper.find('TableBody TableRow')).toHaveLength(3);
  });

  test('list values display correctly', () => {
    const rows = wrapper.find('TableBody TableRow');

    const firstRowCells = rows.at(0).find('TableCell');
    expect(firstRowCells.at(0).text()).toEqual('A');
    expect(firstRowCells.at(1).text()).toEqual('In-Progress');

    const secondRowCells = rows.at(1).find('TableCell');
    expect(secondRowCells.at(0).text()).toEqual('B');
    expect(secondRowCells.at(1).text()).toEqual('In-Progress');

    const thirdRowCells = rows.at(2).find('TableCell');
    expect(thirdRowCells.at(0).text()).toEqual('C');
    expect(thirdRowCells.at(1).text()).toEqual('In-Progress');
  });
});
