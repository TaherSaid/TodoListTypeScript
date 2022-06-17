interface Todo {
  text: string;
  complete: boolean;
}

interface Props {
  todo: Todo;
  ToggleTodo;
}

interface TodoListProps {
  todoList: Todo[];
  ToggleTodo;
}

interface AddTodoItemProps {
  addTodoItem;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodoItem = (newTodoItem: Todo) => void;
