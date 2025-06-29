export interface Task {
  id: number;
  text: string;
  done: boolean;
}

type AddedAction = {
  type: 'added';
  id: number;
  text: string;
};

type ChangedAction = {
  type: 'changed';
  task: Task;
};

type DeletedAction = {
  type: 'deleted';
  id: number;
};

export type TaskAction = AddedAction | ChangedAction | DeletedAction;