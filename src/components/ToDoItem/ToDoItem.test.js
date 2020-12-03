import React from 'react';
import { mount } from 'enzyme';

import ToDoItem from './';

//comply with warnings regarding tr not inside a table
const TableWrappedComponent = (props) => {
  return (
    <table>
      <tbody>
        <ToDoItem {...props} />
      </tbody>
    </table>
  )
}

test('renders without crashing', () => {
  mount(<TableWrappedComponent />);
});

describe('handles delete correctly', () => {
  let deletedToDo;

  const initialToDo = 'Message';
  const callback = (toDo) => {
    deletedToDo = toDo;
  }
  const wrapper = mount(<TableWrappedComponent item={initialToDo} deleteItem={callback}/>);
  wrapper.find('Button[name="deleteToDoBtn"]').simulate('click');

  test('callback returned todo', () => {
    expect(deletedToDo).toEqual('Message');
  });
});