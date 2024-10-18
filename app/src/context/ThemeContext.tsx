// src/context/ThemeContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from 'react';

type Theme = {
  background: string;
  color: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const defaultTheme: Omit<Theme, 'toggleTheme'> = {
  background: '#ffffff',
  color: '#000000',
  isDarkMode: false,

};

export const ThemeContext = createContext<Theme | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Omit<Theme, 'toggleTheme'>>(defaultTheme);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => ({
        background: prevTheme.isDarkMode ? '#ffffff' : '#333333',
        color: prevTheme.isDarkMode ? '#000000' : '#ffffff',
        isDarkMode: !prevTheme.isDarkMode,
      }));
    };
  
    useEffect(() => {
      // Check the system's preferred color scheme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme((prevTheme) => ({
        ...prevTheme,
        isDarkMode: mediaQuery.matches,
      }));
  
      // Add an event listener to update the theme if the system's theme changes
      const handleChange = (e: MediaQueryListEvent) => {
        setTheme((prevTheme) => ({
          ...prevTheme,
          isDarkMode: e.matches,
        }));
      };
  
      mediaQuery.addEventListener('change', handleChange);
  
      // Clean up the event listener on component unmount
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }, []);
  
    useEffect(() => {
      document.body.className = theme.isDarkMode ? 'dark-mode' : 'light-mode';
    }, [theme.isDarkMode]);
  
    return (
      <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };