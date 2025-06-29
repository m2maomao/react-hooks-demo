import { useState } from "react";
import type { Task } from "./types";

interface TaskListProp {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

interface TaskProp {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

const TaskList = ({tasks, onChangeTask, onDeleteTask}: TaskListProp) => {
  return (
    <ul>
      {
        tasks.map((task: Task) => (
          <li key={task.id}>
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))
      }
    </ul>
  )
}

const Task = ({task, onChange, onDelete}: TaskProp) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if(isEditing) {
    taskContent = (
      <>
        <input value={task.text} onChange={e => {
          onChange({
            ...task,
            text: e.target.value
          });
        }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input type="checkbox" checked={task.done} onChange={(e) => {
        onChange({
          ...task,
          done: e.target.checked
        });
      }} />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  )
}

export default TaskList;