import React, { useState } from 'react';

const CreateToDo = ({ onCreate }) => {
  const [ message, setMessage ] = useState('');

  const handleSubmit = () => onCreate(message);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="message" onChange={evt => setMessage(evt.target.value)} />
      <input type="submit"/>
    </form>
  );
}

export default CreateToDo;