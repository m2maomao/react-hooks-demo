import { useState } from "react";
import { initialTodos, createTodo } from "./todos";
import './index.scss';

export default function TodoList() {
  // 所有数据
  const [todos, setTodos] = useState(initialTodos);
  // 只显示未完成的事项
  const [showActive, setShowActive] = useState(false);
  // 待完成的事项
  const activeTodos = todos.filter((todo) => !todo.completed);
  // 可视的事项
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        只显示未完成的事项
      </label>
      <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{ activeTodos.length } 项待办哦</footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleAddClick() {
    setText("");
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>添加</button>
    </>
  );
}
