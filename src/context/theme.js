"use client"

import { createContext, useContext, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes"
const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children, ...props }) {
  const [color, setColor] = useState('defaultColor');

  return (
    <NextThemesProvider {...props} defaultTheme="light">
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
    </NextThemesProvider>
  );
}
