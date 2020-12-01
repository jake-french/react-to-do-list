import React from 'react';
import { shallow } from 'enzyme';

import { ToDoList } from './ToDoList';

test('renders without errors', () => {
  shallow(<ToDoList />);
});

describe('list displays items correctly', () => {
  const items = ['A', 'B', 'C'];
  const wrapper = shallow(<ToDoList items={items} />);

  test('list shows correct number of items', () => {
    expect(wrapper.find('tr')).toHaveLength(3);
  });

  test('list values display correctly', () => {
    const rows = wrapper.find('tr');
    expect(rows.at(0).text()).toEqual('A');
    expect(rows.at(1).text()).toEqual('B');
    expect(rows.at(2).text()).toEqual('C');
  })
});
