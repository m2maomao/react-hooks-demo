import type { Todo } from './types';

let nextId = 0;
let calls = 0;
/**
 * @params todos 待办事项
 * @params showActive 是否只显示未完成的事项
 * @returns 可视的待办事项
*/
const getVisibleTodos = (todos: Todo[], showActive: boolean) => {
  console.log(`getVisibleTodos() 被调用了 ${++calls} 次`);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}

const createTodo = (text: string, completed = false) => {
  return {
    id: nextId++,
    text,
    completed
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