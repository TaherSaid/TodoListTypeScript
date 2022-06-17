import { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const initialTodos: Todo[] = [
  {
    text: "kill some one",
    complete: false,
  },
  { text: "kill yourself", complete: false },
];
function App() {
  const [todoList, setTodoList] = useState(initialTodos);

  const ToggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    let selectedTodoIndex = todoList.findIndex((e) => e === selectedTodo);
    let newTodoList = todoList;
    newTodoList[selectedTodoIndex].complete =
      !todoList[selectedTodoIndex].complete;
    setTodoList([...newTodoList]);
  };

  const addTodoItem: AddTodoItem = (newTodoItem: Todo) => {
    setTodoList([...todoList, newTodoItem]);
  };
  return (
    <div className="App">
      <AddTodoForm addTodoItem={addTodoItem} />
      <TodoList ToggleTodo={ToggleTodo} todoList={todoList} />
    </div>
  );
}

export default App;
