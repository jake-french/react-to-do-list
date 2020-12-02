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
          value={message} 
          onChange={evt => setMessage(evt.target.value)}
        />
      </Form.Field>
      <Button type='submit'>Add</Button>
    </Form>
  );
}

export default CreateToDo;