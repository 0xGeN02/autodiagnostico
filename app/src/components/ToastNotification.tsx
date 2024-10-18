// src/components/ToastNotification.tsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ToastNotification.css';

export const showToast = (message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
  toast[type](message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const ToastNotification: React.FC = () => {
  return <ToastContainer />;
};

export default ToastNotification;