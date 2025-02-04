/** @format */

import { FilterParams } from "../pages/tasksPage";
import { Todo } from "../hooks/useTodos";

export const filterTodos = (filterParams: FilterParams, todos: Todo[]) => {
  if (
    filterParams?.searchTerm ||
    filterParams?.selectedIdUserId ||
    filterParams?.filterCompleted !== null
  ) {
    return todos
      .filter((todo) =>
        todo.title
          .toLowerCase()
          .includes(filterParams?.searchTerm?.toLowerCase())
      )
      .filter((todo) =>
        filterParams?.filterCompleted === null
          ? todo
          : filterParams?.filterCompleted
          ? todo.completed
          : !todo.completed
      )
      .filter((todo) =>
        !filterParams?.selectedIdUserId
          ? todo
          : todo.userId === Number(filterParams?.selectedIdUserId)
          ? todo
          : null
      );
  } else {
    return todos;
  }
};
