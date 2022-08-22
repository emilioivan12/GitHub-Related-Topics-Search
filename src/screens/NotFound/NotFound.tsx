import { Typography } from "@mui/material";
import { FaFrown } from "react-icons/fa";
import NotFoundContainer from "./NotFoundContainer";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <FaFrown size={"100px"} />
      <Typography variant="h5">
        Sorry, nothing was found. 
      </Typography>
      <Typography variant="h5">
        Please try again.
      </Typography>
    </NotFoundContainer>
  );
};

export default NotFound;
