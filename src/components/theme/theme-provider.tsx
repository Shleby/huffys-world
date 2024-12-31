"use client";

import React, { useContext, createContext } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

const ThemeToggleContext = createContext<{
  toggleTheme: () => void;
} | null>(null);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <NextThemesProvider {...props}>
      <ThemeToggleContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeToggleContext.Provider>
    </NextThemesProvider>
  );
}

export const useThemeToggle = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error("useThemeToggle must be used within a ThemeProvider");
  }
  return context;
};
