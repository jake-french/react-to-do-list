import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';

import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

import 'semantic-ui-css/semantic.min.css'

const App = () => {
  const [ toDoItems, setToDoItems ] = useState([]);

  const addToDo = (message) => {
    const items = [...toDoItems, message];
    setToDoItems(items);
  };

  return (
    <Container className='spaced'>
      <Header>To-Do List</Header>
      <CreateToDo onCreate={addToDo} />
      <br />
      <ToDoList items={toDoItems} />
    </Container>
  );
}

export default App;