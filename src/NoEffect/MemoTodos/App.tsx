import { useState, useEffect, useMemo } from "react";
import { initialTodos, createTodo, getVisibleTodos } from './todos.tsx';
import { type Todo } from "./types/todos.types.ts";

const TodoList = () => {
  // 所有数据
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  // 只显示未完成的事项
  const [showActive, setShowActive] = useState(false);
  // 新增的待办事项
  const [text, setText] = useState('');

  // useMemo 版本测试
  // 可视的待办事项
  const visibleTodos = useMemo(() => {
    console.time('useMemo caculation');
    const result = (getVisibleTodos(todos, showActive));
    console.timeEnd('useMemo caculation');
    return result;
  }, [todos, showActive]);

  // useEffect 版本测试
  // const [visibleTodos, setVisibleTodos] = useState<Todo[]>([]);
  // useEffect(() => {
  //   console.time('useEffect caculation');
  //   const result = (getVisibleTodos(todos, showActive));
  //   console.timeEnd('useEffect caculation');
  //   setVisibleTodos(result);
  // }, [todos, showActive]);

  const handleAddClick = () => {
    setText('');
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={showActive} onChange={(e) => setShowActive(e.target.checked)} />
        只显示未完成的事项
      </label>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>添加</button>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList;