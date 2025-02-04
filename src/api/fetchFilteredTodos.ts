/** @format */

import { URL } from "../constants/data";
import { Todo } from "../hooks/useTodos";
import { FilterParams } from "../pages/tasksPage";
import { filterTodos } from "../utils/filterTodos";

export const fetchFilteredTodos = async (filterParams: FilterParams) => {
  const response = await fetch(URL);
  return filterTodos(filterParams, (await response.json()) as Todo[]);
};
