import { alpha, Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props extends CardProps {
  primary: boolean;
}

const CardContainer = styled(Card)<Props>(({ theme, primary, onClick }) => ({
  backgroundColor: primary
    ? alpha(theme.palette.primary.main, 0.2)
    : alpha(theme.palette.secondary.main, 0.2),
  "&:hover": {
    backgroundColor: primary
      ? alpha(theme.palette.primary.main, 0.2)
      : alpha(theme.palette.secondary.main, 0.5),
    cursor: onClick ? "pointer" : "default",
  },
}));

export default CardContainer;
