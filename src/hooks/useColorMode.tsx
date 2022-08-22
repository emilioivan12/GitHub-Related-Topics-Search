import React, { useContext, createContext, useMemo, useState } from "react";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { ColorModeType, getDesignTokens } from "../theme/designTokens";

type ColorModeContextType = {
  toggleColorMode: () => void;
  colorMode: ColorModeType;
};

const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

interface Props {
  children: React.ReactNode;
}

// TODO: Think a better name to this provider
export const ThemeColorModeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<ColorModeType>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: ColorModeType) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
      colorMode: mode,
    }),
    [mode]
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
