import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
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
    items.find(item => item.id === toDo.id).message = toDo.message;
    setToDoItems(items);
  };

  return (
    <Container className='spaced'>
      <Header>To-Do List</Header>
      <CreateToDo onCreate={addToDo} />
      <br />
      <ToDoList items={toDoItems} deleteItem={deleteToDo} editItem={editToDo} />
    </Container>
  );
}

export default App;