
const createdToDos = [];

export const createToDo = (message = '') => {
  const toDo = {
    id: createdToDos.length,
    message,
    completed: false
  };
  createdToDos.push(toDo);
  return toDo;
}
