// src/context/ThemeContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type Theme = {
  background: string;
  color: string;
  isDarkMode: boolean;
};

const defaultTheme: Theme = {
  background: '#ffffff',
  color: '#000000',
  isDarkMode: false,
};

export const ThemeContext = createContext<Theme & { toggleTheme: () => void } | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      background: prevTheme.isDarkMode ? '#ffffff' : '#333333',
      color: prevTheme.isDarkMode ? '#000000' : '#ffffff',
      isDarkMode: !prevTheme.isDarkMode,
    }));
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};