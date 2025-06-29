let nextId = 0;
export const createTodo = (text: string, completed: boolean = false) => {
  return {
    id: nextId++,
    text,
    completed
  };
}

export const initialTodos = [
  createTodo('买苹果', true),
  createTodo('买橘子', true),
  createTodo('买胡萝卜'),
];
