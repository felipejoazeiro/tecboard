import { useEffect, useState } from "react";
import ToDoContext from "./TodoContext";

const TODOS = 'todos';

function ToDoProvider({ children }) {

  const savedTodo = localStorage.getItem(TODOS);
  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (description) => {
    if (!description) return;
    setTodos((prevState) => {
      const todo = {
        id: Date.now(),
        description,
        completed: false,
        createdAt: new Date().toISOString().split("T")[0],
      };
      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (item) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === item.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });
  };

  const removeTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id !== todo.id);
    });
  };

  return (
    <ToDoContext.Provider
      value={{ todos, addTodo, toggleTodoCompleted, removeTodo }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
