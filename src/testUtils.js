import { v4 as uuidV4 } from 'uuid';

export const createToDo = (message = '') => {
  const toDo = {
    id: uuidV4(),
    message,
    completed: false
  };
  return toDo;
}
