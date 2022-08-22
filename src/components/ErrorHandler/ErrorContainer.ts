import { styled } from "@mui/material/styles";

const ErrorContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 1),
  rowGap: theme.spacing(5),
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 10),
  },
  svg: {
    fill: theme.palette.primary.main,
  },
  h5: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default ErrorContainer;
