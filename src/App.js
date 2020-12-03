import React, { useState } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import { v4 as uuidV4 } from 'uuid';

import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

import 'semantic-ui-css/semantic.min.css'

const App = ({ items = [] }) => {
  const [ toDoItems, setToDoItems ] = useState(items);

  const addToDo = (message) => {
    const toDo = {
      id: uuidV4(),
      message,
      completed: false,
    }
    const items = [...toDoItems, toDo];
    setToDoItems(items);
  };

  const deleteToDo = (toDo) => {
    const items = [...toDoItems].filter(item => item.id !== toDo.id);
    setToDoItems(items);
  };

  const editToDo = (toDo) => {
    const items = [...toDoItems];
    const id = items.findIndex(item => item.id === toDo.id);
    items[id] = toDo;

    setToDoItems(items);
  };

  return (
    <Container fluid className='spaced'>
      <Grid>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Header>To-Do List</Header>
          <CreateToDo onCreate={addToDo} />
          <br />
          <ToDoList items={toDoItems} deleteItem={deleteToDo} editItem={editToDo} />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    </Container>
  );
}

export default App;