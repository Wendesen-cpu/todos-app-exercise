/** @format */

import {
  styled,
  Switch,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const CustomTable = styled(Table)({
  minWidth: 650,
  borderCollapse: "separate",
  borderSpacing: "0px 20px",
});
export const CustomTableCell = styled(TableCell)({
  borderBottom: "2px solid rgba(132, 114, 229, 0.5)",
  opacity: 1,
});

export const CustomTableRow = styled(TableRow)({
  backgroundColor: "#FFF !important",
  marginX: "20px !important", // Horizontal margin
  display: "table-row", // Ensures it behaves like a full-width row
});

export const CustomTableHead = ({ headTitles }: { headTitles: string[] }) => {
  return (
    <TableHead>
      <TableRow>
        {headTitles.map((title) => (
          <TableCell sx={{ span: { textTransform: "uppercase" } }} key={title}>
            <Typography variant='body1' className='table-head-title'>
              {title}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const LargeSwitch = styled(Switch)(() => ({
  width: 90,
  height: 40,
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
