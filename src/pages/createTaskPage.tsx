/** @format */

import CustomForm, { TodoEdit } from "../components/todoFormComponent";
import { useTodos } from "../hooks/useTodos";

const CreateTaskPage = () => {
  const { addTodo, fetchTodos } = useTodos();

  const addTask = async (task: TodoEdit) => {
    await addTodo(task);
    await fetchTodos();
  };
  return (
    <div className='add-task-page'>
      <CustomForm service='addTodo' handleFormSubmit={addTask} />;
    </div>
  );
};

export default CreateTaskPage;
