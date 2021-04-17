import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import fireEvent from "@testing-library/user-event";
import { newTask } from './utils';


it('renders App', () => {
  render(< App />);
  const AppElement = screen.getByTestId('App');
  expect(AppElement).toBeInTheDocument();
});


it('changes new task to completed on click', () => {
  render(< App />);
  const newToDoElement = screen.getByText(newTask.text);
  fireEvent.click(newToDoElement);
  const updatedToDoElement = screen.getByText(newTask.text);
  expect(updatedToDoElement).toHaveClass('completedToDo');
});


