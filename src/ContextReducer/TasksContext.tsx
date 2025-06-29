import { useContext, useReducer, createContext, type Dispatch } from "react";
import type { Task, TaskAction } from './types';
import { initialTasks } from './data';


export const TasksContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext<Dispatch<TaskAction>>(() => {});

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

export const TaskProvider = ({children}: {children: React.ReactNode}) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext value={dispatch}>
        {children}
      </TasksDispatchContext>
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  return useContext(TasksContext);
}

export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
}