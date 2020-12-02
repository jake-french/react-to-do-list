import React from 'react';
import { mount, shallow } from 'enzyme';

import CreateToDo from './';

test('renders without errors', () => {
  shallow(<CreateToDo />);
});

describe('on create sends new item correctly', () => {
  let createdToDo;

  const onCreate = (toDo) => {
    createdToDo = toDo;
  };
  const wrapper = mount(<CreateToDo onCreate={onCreate}/>);
  wrapper.find('input[name="message"]').simulate('change', { target: { value: 'Test Message' }});
  wrapper.find('form').simulate('submit');

  test('callback returned message', () => {
    expect(createdToDo).toEqual('Test Message');
  });

  test('input is cleared', () => {
    expect(wrapper.find('input[name="message"]').text()).toEqual('');
  });
});