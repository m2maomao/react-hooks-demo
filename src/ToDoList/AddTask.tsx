import { useState } from "react";

type AddTaskProps = {
  onAddTask: (text: string) => void;
}

const AddTask = ({onAddTask}: AddTaskProps) => {
  const [text, setText] = useState('');
  return (
    <>
      <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}

export default AddTask;