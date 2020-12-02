import React from 'react';
import { mount, shallow } from 'enzyme';

import ToDoItem from './';

test('renders without crashing', () => {
  shallow(<ToDoItem />);
});

describe('handles delete correctly', () => {
  let deletedToDo;

  const initialToDo = 'Message';
  const callback = (toDo) => {
    deletedToDo = toDo;
  }
  const wrapper = mount(<ToDoItem item={initialToDo} onDelete={callback}/>);
  wrapper.find('Button[name="deleteToDoBtn"]').simulate('click');

  test('callback returned todo', () => {
    expect(deletedToDo).toEqual('Message');
  });
});