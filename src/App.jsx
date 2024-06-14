import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PackOfItems from "./components/PackOfItems";
import Msg from "./components/Msg";
import { useState } from "react";
function App() {
  const initialTodoData = [
    //   {
    //     name: "Buy a milk",
    //     date: "4/11/2024",
    //   },
    //   {
    //     name: "Your CG pratical ",
    //     date: "14/06/2024",
    //   },
    //   {
    //     name: "Your CG pratical ",
    //     date: "14/06/2024",
    //   },
  ];
  const [todoData, setTodoData] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoData, { name: itemName, date: itemDate }];
    console.log("New item added : ", itemName, itemDate);
    setTodoData(newTodoItems);
  };

  const handleDelItem = (todoItemName) => {
    const newTodoItems = todoData.filter((item) => item.name !== todoItemName);
    setTodoData(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="container-item">
          <AddTodo onNewTodo={handleNewItem} />
          {todoData.length === 0 && <Msg todoItems={todoData}></Msg>}
          <PackOfItems todoItems={todoData} onDeleteClick={handleDelItem} />
        </div>
      </center>
    </>
  );
}

export default App;
