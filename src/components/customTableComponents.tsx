/** @format */

import {
  styled,
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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
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
