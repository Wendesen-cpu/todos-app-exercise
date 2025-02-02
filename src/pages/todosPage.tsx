/** @format */

import { Container } from "@mui/material";
import TodoList from "../components/todoList";
import FilterComponent from "../components/filterComponent";

function Todos() {
  return (
    <div>
      <Container className='todos-page-container'>
        <Container className='filter-container'>
          <FilterComponent />
        </Container>
        <Container className='todos-lis-container'>
          <TodoList />
        </Container>
      </Container>
    </div>
  );
}

export default Todos;
