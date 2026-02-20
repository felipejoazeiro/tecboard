import "./todo-item.style.css";
import { IconPencil, IconTrash } from "../icons";
import { useContext } from "react";
import ToDoContext from "../ToDoContext/TodoContext";

export function ToDoItem({ item }) {
  const { toggleTodoCompleted, removeTodo } = useContext(ToDoContext);
  const styles = ["todo-item"];

  if (item.completed) {
    styles.push("completed");
  }

  return (
    <li className={styles.join(" ")}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onChange={() => toggleTodoCompleted(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => removeTodo(item)}>
            <IconTrash />
          </button>
          <button className="btn">
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
