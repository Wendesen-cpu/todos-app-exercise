/** @format */

import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface TodoEdit {
  task: string;
  completed: boolean;
}

interface TodoErrorType {
  task: string;
}

const CustomForm = ({
  service,
  taskInfo,
  handleFormSubmit,
}: {
  service: "addTodo" | "editTodo";
  taskInfo?: TodoEdit;
  handleFormSubmit: (task: TodoEdit) => void;
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TodoEdit>(
    service === "editTodo" ? taskInfo! : { task: "", completed: false }
  );

  const [errors, setErrors] = useState<TodoErrorType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.task.trim()) {
      setErrors({ task: "Task is required" });
      return;
    } else {
      handleFormSubmit(formData);
      navigate("/");
    }
  };

  return (
    <Container maxWidth='sm' className='custom-form'>
      <Typography variant='body1' gutterBottom>
        {service === "addTodo" ? "Create Todo" : "Edit Todo"}
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          className='form-text-field'
          label='Task'
          name='task'
          value={formData.task}
          onChange={handleChange}
          fullWidth
          margin='normal'
          error={!!errors?.task}
          helperText={errors?.task}
        />
        {service === "editTodo" && (
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.completed}
                onChange={(e) =>
                  setFormData({ ...formData, completed: e.target.checked })
                }
                name='completed'
              />
            }
            label={<Typography variant='body1'>Task Completed</Typography>}
          />
        )}
        <Button type='submit' variant='contained' color='primary' fullWidth>
          {service === "addTodo" ? "Add Todo" : "Edit Todo"}
        </Button>
      </form>
    </Container>
  );
};

export default CustomForm;
