import React, { useState } from 'react';
import CreateToDo from './components/CreateToDo/CreateToDo';

import ToDoList from './components/ToDoList';

const App = () => {
  const [ toDoItems, setToDoItems ] = useState([]);

  const addToDo = (message) => {
    const items = [...toDoItems, message];
    setToDoItems(items);
  };

  return (
    <div>
      <CreateToDo onCreate={addToDo} />
      <br />
      <ToDoList items={toDoItems} />
    </div>
  );
}

export default App;