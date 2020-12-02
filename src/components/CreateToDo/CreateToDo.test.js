import React from 'react';
import { mount, shallow } from 'enzyme';

import CreateToDo from './CreateToDo';

test('renders without errors', () => {
  shallow(<CreateToDo />);
});

test('on create sends new item correctly', () => {
  let createdToDo;

  const onCreate = (toDo) => {
    createdToDo = toDo;
  };
  const wrapper = mount(<CreateToDo onCreate={onCreate}/>);
  wrapper.find('input[name="message"]').simulate('change', { target: { value: 'Test Message' }});
  wrapper.find('form').simulate('submit');

  expect(createdToDo).toEqual('Test Message');
});