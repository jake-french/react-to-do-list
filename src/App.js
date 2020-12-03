import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';

import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

import 'semantic-ui-css/semantic.min.css'

const App = ({ items = [] }) => {
  const [ toDoItems, setToDoItems ] = useState(items);

  const addToDo = (message) => {
    const items = [...toDoItems, message];
    setToDoItems(items);
  };

  const deleteToDo = (toDo) => {
    const items = [...toDoItems].filter(item => item !== toDo);
    setToDoItems(items);
  }

  return (
    <Container className='spaced'>
      <Header>To-Do List</Header>
      <CreateToDo onCreate={addToDo} />
      <br />
      <ToDoList items={toDoItems} deleteItem={deleteToDo} />
    </Container>
  );
}

export default App;