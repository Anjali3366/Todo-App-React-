import TodoItem from "./TodoItem";

function PackOfItems({ todoItems, onDeleteClick }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.date}
          todoName={item.name}
          deleteBtn={onDeleteClick}
        />
      ))}
    </>
  );
}

export default PackOfItems;
