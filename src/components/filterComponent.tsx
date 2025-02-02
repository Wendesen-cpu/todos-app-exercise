/** @format */

import {
  FormControlLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const LargeSwitch = styled(Switch)(() => ({
  width: 90, // Wider switch
  height: 40, // Taller switch
  padding: 6,
  "& .MuiSwitch-switchBase": {
    padding: 12,
    "&.Mui-checked": {
      transform: "translateX(30px)", // Adjust for larger size
    },
  },
  "& .MuiSwitch-thumb": {
    width: 25, // Bigger toggle button (thumb)
    height: 25,
  },
  "& .MuiSwitch-track": {
    borderRadius: 30,
    height: 35, // Make track match height
  },
}));

function FilterComponent() {
  const [checked, setChecked] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleAgeChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className='filter'>
      <Typography variant='h5' className='title'>
        Filters
      </Typography>
      <div className='search-icon-wrapper'>
        <TextField
          variant='outlined'
          className='place-holder'
          placeholder='Search...'
          fullWidth
        />
        <div className='search-icon'>
          <SearchIcon />
        </div>
      </div>
      <div className='toggle-component'>
        <Typography variant='body1'>Completed</Typography>
        <FormControlLabel
          className='toggle-icon-wrapper'
          control={
            <LargeSwitch
              checked={checked}
              onChange={handleChange}
              size='medium'
            />
          }
          label={checked ? "On" : "Off"}
          labelPlacement='start'
        />
      </div>
      <div className='user-select'>
        <Typography variant='body1'>Select user id</Typography>
        <Select
          value={age}
          label='Age'
          onChange={handleAgeChange}
          displayEmpty
          variant='standard'
          sx={{ border: "1px solid #644c79" }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>

      <div className='reset-filters'>
        <Link href='#'>
          <Typography variant='body1'>Reset filters</Typography>
        </Link>
      </div>
    </div>
  );
}

export default FilterComponent;
