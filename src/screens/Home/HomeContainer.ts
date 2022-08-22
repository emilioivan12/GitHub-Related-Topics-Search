import { styled } from "@mui/material/styles";

const HomeContainer = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 1),
  rowGap: theme.spacing(5),
  [theme.breakpoints.up("sm")]: {
    justifyContent: "space-evenly",
    padding: theme.spacing(0, 10),
  },
}));

export default HomeContainer;
