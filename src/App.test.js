import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';
import { createToDo } from './testUtils';

describe('on inital mount', () => {
  const wrapper = shallow(<App />); 

  test('renders without error', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('list should have no elements', () => {
    expect(wrapper.find('TableBody TableRow')).toHaveLength(0);
  })
});

describe('list functionality', () => {
  test('deleted items are removed from list', () => {
    const items = [createToDo('A'), createToDo('B'), createToDo('C')];
    const wrapper = mount(<App items={items} />);

    expect(wrapper.find('TableBody TableRow')).toHaveLength(3);

    var row = wrapper.find('TableBody TableRow').at(1);
    row.find('Button[name="deleteBtn"]').simulate('click');

    expect(wrapper.find('TableBody TableRow')).toHaveLength(2);
  });
})