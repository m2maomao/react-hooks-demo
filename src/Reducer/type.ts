/**
 * 任务操作回调函数类型
 */
export type OnAddTaskFn = (content: string) => void;
export type OnChangeTaskFn = (task: ITask) => void;
export type OnDeleteTaskFn = (id: number) => void;

/**
 * 任务状态枚举
 */
export type TaskStatus = 'pending' | 'completed';

/**
 * 任务项类型定义
 */
export interface ITask {
  id: number;
  text: string;
  done: boolean;
}

/**
 * Reducer Action 类型
 */
export type ActionType = 'added' | 'changed' | 'deleted';

export type Actions =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: ITask }
  | { type: 'deleted'; id: number}

/**
 * 任务列表组件Props
 */
export interface ITaskListProp {
  tasks: ITask[];
  onChangeTask: OnChangeTaskFn;
  onDeleteTask: OnDeleteTaskFn;
}

/**
 * 单个任务组件Props
 */
export interface ITaskProp {
  task: ITask;
  onChange: OnChangeTaskFn;
  onDelete: OnDeleteTaskFn;
}