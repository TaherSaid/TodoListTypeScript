const TodoListItem: React.FC<Props> = ({ todo, ToggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            ToggleTodo(todo);
          }}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
