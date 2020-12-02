import React, { useState } from 'react';

const CreateToDo = ({ onCreate }) => {
  const [ message, setMessage ] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onCreate(message);
    setMessage('');
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="message" value={message} onChange={evt => setMessage(evt.target.value)} />
      <input type="submit"/>
    </form>
  );
}

export default CreateToDo;