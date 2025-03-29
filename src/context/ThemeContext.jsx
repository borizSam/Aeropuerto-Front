import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ColorModeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "transparent", // o "#f4f6f8"
                  paper: "#ffffff",
                },
                text: {
                  primary: "#212121", // gris oscuro
                  secondary: "#555555",
                },
              }
            : {
                background: {
                  default: "transparent", // o "#121212"
                  paper: "#1e1e1e",
                },
                text: {
                  primary: "#f5f5f5", // casi blanco
                  secondary: "#cccccc",
                },
              }),
        },
        typography: {
          fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

