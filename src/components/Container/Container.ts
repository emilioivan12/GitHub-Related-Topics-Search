import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  minHeight: "100vh",
  backgroundColor:theme.palette.background.default
}));

export default Container;
