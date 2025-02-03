/** @format */

import { useEffect, useState } from "react";
import { TodoEdit } from "../components/todoFormComponent";

export interface Todo {
  userId: number;
  title: string;
  completed: boolean;
  id: number;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    setIsLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = (await response.json()) as Todo[];
    setTodos(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const modifyTodo = async (id: number, task: TodoEdit) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    const data = (await response.json()) as Todo;
    setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
  };

  const deleteTodo = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    await response.json();
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = async (task: TodoEdit) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...task,
        userId: Math.floor(Math.random() * 100),
      }),
    });
    const data = (await response.json()) as Todo;
    setTodos([...todos, data]);
  };

  return {
    todos,
    modifyTodo,
    deleteTodo,
    addTodo,
    fetchTodos,
    isLoading,
  };
};
