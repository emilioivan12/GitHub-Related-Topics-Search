import { Button } from "@mui/material";
import { FaMoon, FaSun } from "react-icons/fa";

import { useColorMode } from "../../hooks";

const DarkLightToggleButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return colorMode === "light" ? (
    <Button onClick={toggleColorMode}>
      <FaSun fill="#fff" size={25} />
    </Button>
  ) : (
    <Button onClick={toggleColorMode}>
      <FaMoon fill="#fff" size={25}  />
    </Button>
  );
};

export default DarkLightToggleButton;
