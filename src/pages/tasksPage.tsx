/** @format */

import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
/*
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../hooks/useDebounce";
import { fetchFilteredTodos } from "../api/fetchFilteredTodos";
*/

import TodoList from "../components/todoListComponent";
import FilterComponent from "../components/filterComponent";
import { Todo, useTodos } from "../hooks/useTodos";
import { filterTodos } from "../utils/filterTodos";

export interface FilterParams {
  searchTerm: string;
  selectedIdUserId: string;
  filterCompleted: boolean | null;
}

function Todos() {
  const { todos, isLoading } = useTodos();
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  const [filterParams, setFilterParams] = useState<FilterParams>({
    searchTerm: "",
    selectedIdUserId: "",
    filterCompleted: null,
  });

  const handleFilterParamsChange = (filterParams: FilterParams) => {
    setFilterParams(filterParams);
    setFilteredTodos(() => filterTodos(filterParams, todos));
  };

  /*
  const debouncedFilters = useDebounce<FilterParams>(filterParams, 500); // Debounce 500ms
  const { data: filteredTodos, isLoading } = useQuery({
    queryFn: () => fetchFilteredTodos(filterParams),
    queryKey: ["todos", debouncedFilters],
  });

  // Questa parte è solo per fare la stess cosa using tanstack/react-query.
  // potete uncommentarla and anche le import sopra e poi usare filteredTodos e isLoading invece dei altri che stiamo usando da default.
  */

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className='layout'>
      <Container className='tasks-page-container'>
        <Container className='filter-container'>
          <FilterComponent
            filterParams={filterParams}
            handleFilterParamsChange={handleFilterParamsChange}
          />
        </Container>
        <Container className='tasks-list-container'>
          <TodoList todos={filteredTodos} />
        </Container>
      </Container>
    </div>
  );
}

export default Todos;
