import React from 'react';
import { render, screen } from '@testing-library/react';
import CompletedToDo from './CompletedToDo';
import { completedTask } from "../../utils";
import fireEvent from "@testing-library/user-event";

it('renders task', () => {
  render(< CompletedToDo task={ completedTask } />);
  const newToDoElement = screen.getByText(completedTask.text);
  expect(newToDoElement).toBeInTheDocument();
});


it('renders task with corresponding className', () => {
  render(< CompletedToDo task={ completedTask } />);
  const newToDoElement = screen.getByText(completedTask.text);
  expect(newToDoElement).toHaveClass('completedToDo');
});


it('does not call handler on click', () => {
  const onItemClick = jest.fn();
  render(< CompletedToDo onItemClick={ onItemClick } task={ completedTask } />);
  const completedToDoElement = screen.getByText(completedTask.text);
  fireEvent.click(completedToDoElement);
  expect(onItemClick).toHaveBeenCalledTimes(0);
});


