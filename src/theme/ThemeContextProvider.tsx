/* eslint-disable react-refresh/only-export-components */
import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import { useColorTheme } from "./use-color-theme";

type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};