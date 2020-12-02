import React from 'react';
import { Table } from 'semantic-ui-react'

export const ToDoList = ({ items = [] }) => {

  return(
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Message
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items && items.map(item => {
          return (
            <Table.Row key={item}>
              <Table.Cell>
                {item}
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  );
};

export default ToDoList;