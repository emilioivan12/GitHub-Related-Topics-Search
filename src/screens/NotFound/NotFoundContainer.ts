import { styled } from "@mui/material/styles";

const NotFoundContainer = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 1),
  rowGap: theme.spacing(5),
  justifyContent: "center",
  alignItems:"center",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 10),
  },
  "svg":{
    fill:theme.palette.primary.main,
  },
  "h5":{
    color:theme.palette.text.primary,
    fontWeight:theme.typography.fontWeightBold,
  }
}));

export default NotFoundContainer;
