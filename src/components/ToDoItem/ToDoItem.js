import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const ToDoItem = ({ item, onDelete }) => {
  return (
    <Table.Row>
      <Table.Cell>
        {item}
      </Table.Cell>
      <Table.Cell>
        <Button name='deleteToDoBtn' color='red' onClick={() => onDelete(item)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
  );
}

export default ToDoItem;