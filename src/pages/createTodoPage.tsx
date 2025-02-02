/** @format */

import CustomForm, { TodoEdit } from "../components/todoFormComponent";
import { useTodos } from "../hooks/useTodos";

const CreateTodoPage = () => {
  const { addTodo, fetchTodos } = useTodos();

  const addTask = async (task: TodoEdit) => {
    await addTodo(task);
    await fetchTodos();
  };
  return <CustomForm service='addTodo' handleFormSubmit={addTask} />;
};

export default CreateTodoPage;
