interface CreateTodoProps {
  text: string;
  complete?: boolean;
}

interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

export type {
  CreateTodoProps,
  Todo,
}