import React from 'react';

const NewToDo = ( { task, onItemClick } ) => {
  return (
    <li onClick={ (event) => onItemClick(task, event) }>{ task.text } </li>
  );
};

export default NewToDo;