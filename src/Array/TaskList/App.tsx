import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import type { ITodo } from './types';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      }
    ])
  }

  const handleChangeTodo = (nextTodo: ITodo) => {
    // const todo = todos.find(t => {
    //   return t.id === nextTodo.id
    // });

    // if(todo) {
    //   todo.title = nextTodo.title;
    //   todo.done = nextTodo.done;
    // }
    const todoNext = todos.map((t => {
      if(t.id === nextTodo.id) {
        return nextTodo;
      }
      return t;
    }));
    setTodos(todoNext);
  }

  const handleDeleteTodo = (todoId: number) => {
    const nextTodos = todos.filter(t => t.id !== todoId);
    setTodos(nextTodos);
  }


  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
