import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

let nextId = 3;

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>Add</button>
    </>
  )
}

export default AddTask;