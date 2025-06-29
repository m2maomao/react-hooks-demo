import { useState } from "react";
import type { Task } from "./types";
import { useTasks, useTasksDispatch } from "./TasksContext";

const TaskList = () => {
  const tasks = useTasks();
  return (
    <ul>
      {
        tasks.map((task: Task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))
      }
    </ul>
  );
}

const Task = ({ task }: {task: Task}) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if(isEditing) {
    taskContent = (
      <>
        <input value={task.text} onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              text: e.target.value
            }
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
        dispatch({
          type: 'changed',
          task: {
            ...task,
            done: e.target.checked
          }
        });
      }} />
      {taskContent}
      <button onClick={() => dispatch({
        type: 'deleted',
        id: task.id
      })}>
        Delete
      </button>
    </label>
  )
}

export default TaskList;