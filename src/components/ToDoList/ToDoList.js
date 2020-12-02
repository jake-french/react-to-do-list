import React from 'react';
import { Table } from 'semantic-ui-react'

import ToDoItem from '../ToDoItem';

export const ToDoList = ({ items = [] }) => {

  return(
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Message
          </Table.HeaderCell>
          <Table.HeaderCell>
            Options
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items && items.map(item => {
          return <ToDoItem key={item} item={item} />
        })}
      </Table.Body>
    </Table>
  );
};

export default ToDoList;