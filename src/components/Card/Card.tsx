import {
  CardContent,
  Typography,
} from "@mui/material";

import CardContainer from "./CardContainer";

interface Props {
  title: string;
  subtitle: string;
  description?: string;
  primary: boolean;
  onClick?: () => void;
}

const Card: React.FC<Props> = ({
  title,
  subtitle,
  description,
  primary=true,
  onClick,
}) => {
  return (
    <CardContainer variant="outlined" onClick={onClick} primary={primary}>
      <CardContent sx={{textAlign:'center'}}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="subtitle2">
          {subtitle}
        </Typography>
        {description && <Typography variant="body1">{description}</Typography>}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
