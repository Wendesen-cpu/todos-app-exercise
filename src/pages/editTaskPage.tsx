/** @format */

import { useParams } from "react-router-dom";
import CustomForm, { TodoEdit } from "../components/todoFormComponent";
import { useMemo } from "react";
import { useTodos } from "../hooks/useTodos";

const EditTaskPage = () => {
  const { id } = useParams();
  const { todos, modifyTodo, fetchTodos } = useTodos();
  const task = useMemo(() => {
    const currentTodo = todos.find((todo) => todo.id === Number(id))!;
    return currentTodo
      ? {
          task: currentTodo.title,
          completed: currentTodo.completed,
        }
      : {
          task: "",
          completed: false,
        };
  }, [id, todos]);

  const editTask = async (task: TodoEdit) => {
    await modifyTodo(Number(id), task);
    await fetchTodos();
  };

  return (
    task.task && (
      <div className='edit-task-page'>
        <CustomForm
          service='editTodo'
          taskInfo={task}
          handleFormSubmit={editTask}
        />
      </div>
    )
  );
};

export default EditTaskPage;
