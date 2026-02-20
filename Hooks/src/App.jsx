import { useContext } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { EmptyState } from "./components/EmptyState";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoGroup } from "./components/ToDoGroup";
import ToDoContext from "./components/ToDoProvider/TodoContext";

function App() {

  const { todos, addTodo, editTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo } = useContext(ToDoContext);

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData);
    } else {
      addTodo(formData);
    }
    closeFormTodoDialog();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            items={todos.filter((t) => !t.completed)}
          />
          {todos.length === 0 && <EmptyState />}
          <ToDoGroup
            heading="Concluído"
            items={todos.filter((t) => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <ToDoForm onSubmit={handleFormSubmit} defaultValue={selectedTodo ? selectedTodo.description : ""} />
            </Dialog>
            <FabButton onClick={() => openFormTodoDialog(null)}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
