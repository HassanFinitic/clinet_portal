import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { useThemeContext } from "./ThemeContextProvider";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
