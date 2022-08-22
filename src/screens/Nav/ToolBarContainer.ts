import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ToolbarContainer = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
}));

export default ToolbarContainer;
