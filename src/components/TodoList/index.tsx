import TodoListItem from "../TodoListItem";

const TodoList: React.FC<TodoListProps> = ({ ToggleTodo, todoList }) => {
  return (
    <div>
      {todoList
        .slice(0)
        .reverse()
        .map((todo, key) => (
          <TodoListItem key={key} todo={todo} ToggleTodo={ToggleTodo} />
        ))}
    </div>
  );
};

export default TodoList;
