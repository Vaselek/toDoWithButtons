import React, {Fragment} from 'react';
import CompletedToDo from "../CompletedToDo/CompletedToDo";
import NewToDo from "../NewToDo/NewToDo";
import './ToDoList.css';

const ToDoList = ({tasks, onItemClick}) => {
  const tasksList = tasks.map(task => task.done ?
    <CompletedToDo task={task} /> :
    <NewToDo onItemClick={onItemClick} task={task} />
  );

  return (
    <Fragment>
      <h3>To Do Tasks</h3>
      <ul>
        { tasksList }
      </ul>
    </Fragment>
  );
};

export default ToDoList;