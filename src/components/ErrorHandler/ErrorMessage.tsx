import { Typography } from "@mui/material";
import { FaFrown } from "react-icons/fa";

import NotFoundContainer from "./ErrorContainer";

const ErrorMessage = () => {
  return (
    <NotFoundContainer>
      <FaFrown size={"100px"} />
      <Typography variant="h5">
        Sorry, something goes wrong.
      </Typography>
      <Typography variant="h5">
        Please try again later.
      </Typography>
    </NotFoundContainer>
  );
};

export default ErrorMessage;
