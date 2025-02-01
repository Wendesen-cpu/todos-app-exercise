/** @format */

import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import {
  CustomTable,
  CustomTableCell,
  CustomTableHead,
  CustomTableRow,
} from "./customTableComponents";
import { Box, Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import TodoStatus from "./todoStatus";

interface Todo {
  userId: number;
  title: string;
  completed: boolean;
  id: number;
}

const ROWS_PER_PAGE = 3;

const useStyles = makeStyles({
  tableContainer: {
    display: "block",
  },
});

function TodoList() {
  const [page, setPage] = useState(1);
  const classes = useStyles();

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const visibleRows = todos.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE + ROWS_PER_PAGE
  );

  return (
    <>
      <TableContainer component={Paper} sx={{}}>
        <CustomTable
          aria-label='simple table'
          sx={{ width: "90%", margin: "auto" }}
        >
          <CustomTableHead headTitles={["user id", "Title", "Completed"]} />
          <TableBody className={classes.tableContainer}>
            {visibleRows.map((row) => (
              <CustomTableRow key={row.id}>
                <CustomTableCell scope='row'>{row.id}</CustomTableCell>
                <CustomTableCell align='left'>{row.title}</CustomTableCell>
                <CustomTableCell align='center'>
                  <TodoStatus status={row.completed} />
                </CustomTableCell>
              </CustomTableRow>
            ))}
          </TableBody>
        </CustomTable>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <Pagination
          count={Math.ceil(todos.length / ROWS_PER_PAGE)} // Total pages
          page={page} // Current page
          onChange={(event, value) => setPage(value)} // Update page number
          color='primary'
        />
      </Box>
    </>
  );
}

export default TodoList;
