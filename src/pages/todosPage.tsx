/** @format */

import { Container } from "@mui/material";
import TodoList from "../components/todoListComponent";
import FilterComponent from "../components/filterComponent";
import { useEffect, useState } from "react";
import { Todo, useTodos } from "../hooks/useTodos";
import useFilterTodos from "../hooks/useFilterTodos";

export interface FilterParams {
  searchTerm: string;
  selectedIdUserId: string;
  filterCompleted: boolean | null;
}

function Todos() {
  const { filterTodos } = useFilterTodos();
  const { todos } = useTodos();
  const [filterParams, setFilterParams] = useState<FilterParams>({
    searchTerm: "",
    selectedIdUserId: "",
    filterCompleted: null,
  });

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  const handleFilterParamsChange = (filterParams: FilterParams) => {
    setFilterParams(filterParams);
    setFilteredTodos(() => filterTodos(filterParams));
  };

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <div className='layout'>
      <Container className='todos-page-container'>
        <Container className='filter-container'>
          <FilterComponent
            filterParams={filterParams}
            handleFilterParamsChange={handleFilterParamsChange}
          />
        </Container>
        <Container className='todos-lis-container'>
          <TodoList todos={filteredTodos} />
        </Container>
      </Container>
    </div>
  );
}

export default Todos;
