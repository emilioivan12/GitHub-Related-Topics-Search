import CircularProgress from "@mui/material/CircularProgress";

import LoadingContainer from "./LoadingContainer";

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress size={120} />
    </LoadingContainer>
  );
};

export default Loading;
