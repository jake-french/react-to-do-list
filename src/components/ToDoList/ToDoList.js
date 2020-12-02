import React from 'react';

export const ToDoList = ({ items = [] }) => {

  return(
    <table>
      <thead>
        <tr>
          <th>
            Message
          </th>
        </tr>
      </thead>
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