import { useReducer } from "react";
import AddTask from './AddTask';
import TaskList from './TaskList';
import { initialTasks } from './data';
import type { Task, TaskAction } from './types';

const tasksReducer = (tasks: Task[], action: TaskAction) => {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + (action as {type: string}).type);
    }
  }
}

let nextId = 3;

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);


  const handleAddTask = (text: string) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  const handleChangeTask = (task: Task) => {
    dispatch({
      type: 'changed',
      task: task,
    })
  }

  const handleDeleteTask = (taskId: number) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  )
}

export default TaskApp;