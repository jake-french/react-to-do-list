import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const ToDoItem = ({ deleteItem, item }) => {
  return (
    <Table.Row >
      <Table.Cell>
        {item}
      </Table.Cell>
      <Table.Cell>
        <Button name='deleteToDoBtn' color='red' onClick={() => deleteItem(item)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
  );
}

export default ToDoItem;