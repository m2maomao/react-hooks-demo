import { useState, useEffect } from "react";
import { initialTodos, createTodo, getVisibleTodos } from './todos.tsx';

const TodoList = () => {
  // 所有数据
  const [todos, setTodos] = useState(initialTodos);
  // 只显示未完成的事项
  const [showActive, setShowActive] = useState(false);
  // 新增的待办事项
  const [text, setText] = useState('');
  // 可视的待办事项
  const [visibleTodos, setVisibleTodos] = useState([]);

  useEffect(() => {
    setVisibleTodos(getVisibleTodos(todos, showActive));
  }, [todos, showActive]);

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