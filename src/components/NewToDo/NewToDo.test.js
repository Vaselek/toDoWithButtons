import React from 'react';
import { render, screen } from '@testing-library/react';
import NewToDo from './NewToDo';
import { newTask } from "../../utils";
import fireEvent from "@testing-library/user-event";

it('renders task', () => {
  render(< NewToDo task={ newTask } />);
  const newToDoElement = screen.getByText(newTask.text);
  expect(newToDoElement).toBeInTheDocument();
});


it('calls handler on click', () => {
  const onItemClick = jest.fn();
  render(< NewToDo onItemClick={ onItemClick } task={ newTask } />);
  const newToDoElement = screen.getByText(newTask.text);
  fireEvent.click(newToDoElement);
  expect(onItemClick).toHaveBeenCalledTimes(1);
});


