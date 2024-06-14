import { useState } from "react";

export default function AddTodo({ onNewTodo }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddBtnClicked = () => {
    onNewTodo(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <>
      <div className="row my-row">
        <div className="col-6">
          <input
            onChange={handleNameChange}
            value={todoName}
            placeholder="Enter your task "
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success "
            onClick={handleAddBtnClicked}
          >
            Add !
          </button>
        </div>
      </div>
    </>
  );
}
