import type { Todo } from './types';

let nextId = 0;
let calls = 0;

const getVisibleTodos = (todos: Todo[], showActive: boolean) => {
  console.log(`getVisibleTodos() 被调用了 ${++calls} 次`);
  const activeTodos = todos.filter((todo) => !todo.complete);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}

const createTodo = (text: string, complete = false) => {
  return {
    id: nextId++,
    text,
    complete
  };
}

const initialTodos = [
  createTodo('买苹果', true),
  createTodo('买橘子', true),
  createTodo('买胡萝卜'),
]

export {
  initialTodos,
  createTodo,
  getVisibleTodos,
}