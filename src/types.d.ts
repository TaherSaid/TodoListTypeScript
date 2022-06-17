interface Todo {
  text: string;
  complete: boolean;
}

interface Props {
  todo: Todo;
  ToggleTodo;
}

type ToggleTodo = (selectedTodo: Todo) => void;
