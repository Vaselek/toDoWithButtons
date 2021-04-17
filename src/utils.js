export const newTask = {
  text: 'first text',
  done: false, id: 1
};

export const completedTask = {
  text: 'second text',
  done: true, id: 2
};

export const tasks = [
  { ...newTask },
  { ...completedTask },
];
