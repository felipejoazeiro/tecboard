
import { useEffect, useState } from "react";
import ToDoContext from "./TodoContext";

const TODOS = "todos";

function ToDoProvider({ children }) {
  const savedTodo = localStorage.getItem(TODOS);
  const [showDialog, setShowDialog] = useState(false);
  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);
  const [selectedTodo, setSelectedTodo] = useState(null);

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
  
    const openDialogForEdition = (todo) => {
    setSelectedTodo(todo);
    setShowDialog(true);
  }

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

  const editTodo = (description) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === selectedTodo.id) {
          return { ...t, description };
        }
        return t;
      });
    });
  }

  const removeTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id !== todo.id);
    });
  };

  const openFormTodoDialog = (todo) => {
    if(todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  }

  const closeFormTodoDialog = () => {
    setSelectedTodo(null);
    setShowDialog(false);
  }

  return (
    <ToDoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        removeTodo,
        showDialog,
        selectedTodo,
        openFormTodoDialog,
        closeFormTodoDialog,
        openDialogForEdition,
        editTodo
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
