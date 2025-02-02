/** @format */

import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  CustomTable,
  CustomTableCell,
  CustomTableHead,
  CustomTableRow,
} from "./customTableComponents";
import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { Todo, useTodos } from "../hooks/useTodos";

const ROWS_PER_PAGE = 2.5;

function TodoList({ todos }: { todos: Todo[] }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { deleteTodo } = useTodos();

  const visibleRows = todos?.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE + ROWS_PER_PAGE
  );

  const handleEdit = (id: number) => {
    navigate(`/edit-todo/${id}`);
  };

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <CustomTable
          aria-label='simple table'
          sx={{ width: "90%", margin: "auto" }}
        >
          <CustomTableHead
            headTitles={["user id", "Title", "Completed", "Action"]}
          />
          <TableBody>
            {visibleRows.map((row) => (
              <CustomTableRow key={row.id}>
                <CustomTableCell scope='row'>{row.userId}</CustomTableCell>
                <CustomTableCell align='left'>{row.title}</CustomTableCell>
                <CustomTableCell align='center'>
                  {row.completed ? (
                    <CheckIcon sx={{ color: "#00A0DF" }} />
                  ) : (
                    <CloseIcon sx={{ color: "#00A0DF" }} />
                  )}
                </CustomTableCell>
                <CustomTableCell align='left'>
                  <EditIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleEdit(row.id)}
                  />
                  <DeleteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleDelete(row.id)}
                  />
                </CustomTableCell>
              </CustomTableRow>
            ))}
          </TableBody>
        </CustomTable>
      </TableContainer>
      <Box className='pagination-container'>
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
