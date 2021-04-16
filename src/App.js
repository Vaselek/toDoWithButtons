import React, { useState } from 'react';
import './App.css';
import ToDoList from "./components/ToDoList/ToDoList";

const initialState = [
  {text: 'first text', done: false, id: 1},
  {text: 'second text', done: true, id: 2},
];

function App() {

  const [ tasks, setTasks ] = useState(initialState);

  const onItemClickHandler = (item, e) => {
    e.preventDefault();
    e.stopPropagation();
    const newTasks = tasks.map(task => {
      if (task.id === item.id) {
        return {
          ...item,
          done: true
        }
      }
      return task;
    });

    setTasks(newTasks);
  };


  return (
    <div className="App">
      <ToDoList tasks={ tasks } onItemClick={ onItemClickHandler }/>
    </div>
  );
}

export default App;
