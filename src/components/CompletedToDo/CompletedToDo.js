import React from 'react';
import './CompletedToDo.css';

const CompletedToDo = ( {task} ) => {
  return (
    <li key={ task.id } className='completedToDo'>{ task.text }</li>
  );
};

export default CompletedToDo;