/** @format */

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function TodoStatus({ status }: { status: boolean }) {
  return status ? (
    <CheckIcon sx={{ color: "#00A0DF" }} />
  ) : (
    <CloseIcon sx={{ color: "#00A0DF" }} />
  );
}

export default TodoStatus;
