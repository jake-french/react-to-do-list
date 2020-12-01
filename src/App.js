import React, { useState } from 'react';

import ToDoList from './components/ToDoList';

const App = () => {
  const [ toDoItems, setToDoItems ] = useState([]);

  return (
    <div>
      <ToDoList items={toDoItems} />
    </div>
  );
}

export default App;