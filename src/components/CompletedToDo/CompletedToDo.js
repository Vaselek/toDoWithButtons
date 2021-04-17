import React from 'react';
import './CompletedToDo.css';

const CompletedToDo = ( {task} ) => {
  return (
    <li className='completedToDo'>{ task.text }</li>
  );
};

export default CompletedToDo;