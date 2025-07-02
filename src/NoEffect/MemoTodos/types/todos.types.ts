interface CreateTodoProps {
  text: string;
  completed?: boolean;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type {
  CreateTodoProps,
  Todo,
}