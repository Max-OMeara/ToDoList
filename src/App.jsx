import { useState } from "react";
import "./styles.css";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";

export default function App() {
  const [toDos, setToDos] = useState([]);

  function addToDo(title) {
    setToDos((currentToDos) => [
      ...currentToDos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDos) =>
      currentToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed } : toDo
      )
    );
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => currentToDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <>
      <NewToDoForm onSubmit={addToDo} />
      <h1 className="header">ToDo List</h1>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
}