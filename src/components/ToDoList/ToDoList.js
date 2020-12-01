import React from 'react';

export const ToDoList = ({ items = [] }) => {

  return(
    <table>
      <tbody>
        {items && items.map(item => {
          return (
            <tr key={item}>
              <td>
                {item}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default ToDoList;