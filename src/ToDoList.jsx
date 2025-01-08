import { ToDoItem } from "./ToDoItem";

export function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return (
    <ul className="list">
      {toDos.length === 0 && "No ToDos, Yet..."}
      {toDos.map((toDo) => (
        <ToDoItem
          {...toDo}
          key={toDo.id}
          toggleToDo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
}
