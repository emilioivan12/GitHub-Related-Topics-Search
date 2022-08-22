import { styled, alpha } from "@mui/material/styles";
import { Button } from "@mui/material";

const SearchButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  fontWeight: theme.typography.fontWeightBold,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
  },
  right: 0,
}));

export default SearchButton