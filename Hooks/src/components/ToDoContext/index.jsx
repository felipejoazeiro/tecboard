import { use, useState  } from "react";
import ToDoContext from "./TodoContext";

function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([{
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Props, state e hooks",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);

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
