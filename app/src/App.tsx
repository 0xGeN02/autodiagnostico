// src/App.tsx
import React from 'react';
import SurveyForm from './components/SurveyForm';
import Landing from './components/Landing';
import { ToastContainer } from 'react-toastify';
// import ThemeToggleButton from './components/ThemeToggleButton';
// import { ThemeProvider } from './context/ThemeContext';

const handlePath = (pathname: string) => {
  return (
    <div>
      {pathname === '/' && <Landing />}
      {pathname === '/survey' && <SurveyForm />}
    </div>
  );
};

const App: React.FC = () => {
  const pathname = window.location.pathname;

  return (
    <>
      {handlePath(pathname)}
      <ToastContainer />
    </>
  );
};

export default App;