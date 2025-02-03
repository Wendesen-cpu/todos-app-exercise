/** @format */

import {
  FormControlLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { FilterParams } from "../pages/tasksPage";
import { LargeSwitch } from "./customTableComponents";

function FilterComponent({
  filterParams,
  handleFilterParamsChange,
}: {
  filterParams: FilterParams;
  handleFilterParamsChange: (filterParams: FilterParams) => void;
}) {
  const [userIdList, setUserIdList] = useState<string[]>([]);
  const { todos } = useTodos();

  const handleFilterCompletedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFilterParamsChange({
      ...filterParams,
      filterCompleted: event.target.checked,
    });
  };

  const handleUserIdChange = (event: SelectChangeEvent) => {
    handleFilterParamsChange({
      ...filterParams,
      [event.target.name]: event.target.value,
    });
  };
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFilterParamsChange({
      ...filterParams,
      [event.target.name]: event.target.value as string,
    });
  };

  const handleResetFilters = () => {
    handleFilterParamsChange({
      searchTerm: "",
      selectedIdUserId: "",
      filterCompleted: null,
    });
  };

  useEffect(() => {
    setUserIdList([...new Set(todos.map((todo) => todo.userId.toString()))]);
  }, [todos]);

  return (
    <div className='filter'>
      <Typography variant='h5' className='title'>
        Filters
      </Typography>
      <div className='filters-wrapper'>
        <div className='search-icon-wrapper'>
          <TextField
            name='searchTerm'
            value={filterParams?.searchTerm}
            variant='outlined'
            className='place-holder'
            placeholder='Search...'
            fullWidth
            onChange={handleSearchTermChange}
          />
          <div className='search-icon'>
            <SearchIcon />
          </div>
        </div>
        <div className='toggle-component'>
          <Typography variant='body1'>Completed</Typography>
          <FormControlLabel
            className='toggle-icon-wrapper'
            name='filterCompleted'
            value={filterParams?.filterCompleted ?? false}
            control={
              <LargeSwitch
                checked={filterParams?.filterCompleted ?? false}
                onChange={handleFilterCompletedChange}
                size='medium'
              />
            }
            label={filterParams?.filterCompleted ? "On" : "Off"}
            labelPlacement='start'
          />
        </div>
        <div className='user-select'>
          <Typography variant='body1'>Select user id</Typography>
          <Select
            name='selectedIdUserId'
            value={filterParams?.selectedIdUserId ?? ""}
            label='User Id'
            onChange={handleUserIdChange}
            displayEmpty
            variant='standard'
            sx={{ border: "1px solid #644c79" }}
          >
            {userIdList.map((user) => {
              return (
                <MenuItem value={user} key={user}>
                  {user}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </div>
      <div className='reset-filters'>
        <Typography onClick={handleResetFilters} variant='body1'>
          Reset filters
        </Typography>
      </div>
    </div>
  );
}

export default FilterComponent;
