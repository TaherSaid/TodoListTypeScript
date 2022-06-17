import { useState } from "react";
import TodoListItem from "./components/TodoListItem";
import "./App.css";

const initialTodos: Todo[] = [
  {
    text: "kill some one",
    complete: false,
  },
  { text: "kill yourself", complete: false },
];
function App() {
  const [todoList, setTodoList] = useState(initialTodos);

  const ToggleTodo = (selectedTodo: Todo) => {
    let selectedTodoIndex = todoList.findIndex((e) => e === selectedTodo);
    let newTodoList = todoList;
    newTodoList[selectedTodoIndex].complete =
      !todoList[selectedTodoIndex].complete;
    setTodoList([...newTodoList]);
  };

  return (
    <div className="App">
      {todoList.map((todo, key) => (
        <TodoListItem key={key} todo={todo} ToggleTodo={ToggleTodo} />
      ))}
    </div>
  );
}

export default App;
