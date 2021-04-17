import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList';
import { tasks } from "../../utils";


it('renders tasks header', () => {
  render(< ToDoList tasks={ tasks } />);
  const taskListHeader = screen.getByText(/to do tasks/i);
  expect(taskListHeader).toBeInTheDocument();
});


it('renders tasks', () => {
  render(< ToDoList tasks={ tasks } />);
  const taskElements = screen.getAllByRole('listitem');
  expect(taskElements).toHaveLength(2);
});
