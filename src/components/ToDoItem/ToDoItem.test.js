import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import ToDoItem from './';
import { createToDo } from '../../testUtils';

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
  mount(<TableWrappedComponent item={createToDo('fake')} />);
});

describe('can delete', () => {
  let deletedToDo;

  const initialToDo = createToDo('Message');
  const callback = (toDo) => {
    deletedToDo = toDo;
  }
  const wrapper = mount(<TableWrappedComponent item={initialToDo} deleteItem={callback}/>);
  wrapper.find('Button[name="deleteBtn"]').simulate('click');

  test('callback returned todo', () => {
    expect(deletedToDo.message).toEqual('Message');
  });
});

describe('can edit', () => {
  describe('edit updates todo', () => {
    let editedToDo;

    const initalToDo = createToDo('inital Message');
    const editMessage = 'edited Message';
    const callback = (toDo) => {
      editedToDo = toDo;
    };
    const wrapper = mount(<TableWrappedComponent item={initalToDo} editItem={callback} />);

    wrapper.find('Button[name="editBtn"]').simulate('click');

    test('message becomes editable', () => {
      expect(wrapper.find('input[name="editMessage"]')).toHaveLength(1);
      expect(wrapper.find('select[name="editStatus"]')).toHaveLength(1);
    });

    test('edit option buttons appear', () => {
      expect(wrapper.find('Button[name="confirmEditBtn"]')).toHaveLength(1);
      expect(wrapper.find('Button[name="cancelEditBtn"]')).toHaveLength(1);
    });

    test('edited message is returned', () => {
      wrapper.find('input[name="editMessage"]').simulate('change', { target: { value: editMessage }});
      wrapper.find('Button[name="confirmEditBtn"]').simulate('click');
      expect(editedToDo.message).toEqual(editMessage);
    });
  });
});