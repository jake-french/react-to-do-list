import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const CreateToDo = ({ onCreate }) => {
  const [ message, setMessage ] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onCreate(message);
    setMessage('');
  } 

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label htmlFor="message">Message</label>
        <input 
          id="message"
          type="text" 
          name="message"
          autoComplete="off" 
          value={message} 
          onChange={evt => setMessage(evt.target.value)}
        />
        <Button attached='bottom' onClick={handleSubmit}>Add</Button>
      </Form.Field>
    </Form>
  );
}

export default CreateToDo;