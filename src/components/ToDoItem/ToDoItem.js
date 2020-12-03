import React, { Fragment, useState } from 'react';
import { Button, Form, Icon, Table } from 'semantic-ui-react';

const ToDoItem = ({ deleteItem, editItem, item }) => {
  const [ isEditMode, setIsEditMode ] = useState(false);
  const [ message, setMessage ] = useState(item.message);
  const [ status, setStatus ] = useState(item.completed);

  const submitChange = () => {
    editItem({ ...item, message, status });
    setIsEditMode(false);
  }

  return (
    <Table.Row>
      <Table.Cell>
        {isEditMode ? (
          <Form>
            <Form.Field>
              <textarea 
                name='editMessage'
                type='text'
                value={message}
                onChange={evt => setMessage(evt.target.value)}
              />
            </Form.Field>
          </Form>
        ) : (
          message
        )}
      </Table.Cell>
      <Table.Cell>
        {isEditMode ? (
          <Form>
            <Form.Field>
              <select
                name='editStatus'
                value={status}
                onChange={evt => setStatus(evt.target.value)}
              >
                <option value={true}>Completed</option>
                <option value={false}>In-Progress</option>
              </select>
            </Form.Field>
          </Form>
        ) : (
          item.completed ? 'Completed' : 'In-Progress'
        )}
        
      </Table.Cell>
      <Table.Cell>
        {isEditMode ? (
          <Button.Group>
            <Button
              icon
              labelPosition='left'
              name='confirmEditBtn'
              color='green'
              onClick={submitChange}
            >
              <Icon name='checkmark' />
              Update
            </Button>
            <Button.Or />
            <Button
              icon
              labelPosition='left'
              name='cancelEditBtn'
              color='red'
              onClick={evt => setIsEditMode(false)}
            >
              <Icon name='cancel' />
              Cancel
            </Button>
          </Button.Group>
        ) : (
          <Fragment>
            <Button
              icon
              labelPosition='left'
              name='editBtn'
              color='blue'
              onClick={() => setIsEditMode(true)}
            >
              <Icon name='pencil' />
              Edit
            </Button>
            <Button 
              icon
              labelPosition='left'
              name='deleteBtn' 
              color='red' 
              onClick={() => deleteItem(item)}
            >
              <Icon name='trash' />
              Delete
            </Button>
          </Fragment>
        )}
      </Table.Cell>
    </Table.Row>
  );
}

export default ToDoItem;