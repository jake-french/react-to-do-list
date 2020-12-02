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
      <ToDoList items={toDoItems} />
      <br/>
      <CreateToDo onCreate={addToDo} />
    </div>
  );
}

export default App;