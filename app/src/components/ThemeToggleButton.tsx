// src/components/ThemeToggleButton.tsx
import React from 'react';
import useTheme from '../hook/useTheme';
import '../styles/ThemeToggleButton.css';

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;