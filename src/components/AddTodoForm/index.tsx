import React, { useState } from "react";
const AddTodoForm: React.FC<AddTodoItemProps> = ({ addTodoItem }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className=""
        name="todoItem"
        placeholder="TodoItem"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodoItem({ text, complete: false })}>
        Add
      </button>
    </div>
  );
};

export default AddTodoForm;
