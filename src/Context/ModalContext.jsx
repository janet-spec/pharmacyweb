import { createContext, useState, useContext } from 'react';

// Create the context
const ModalContext = createContext();

// Create a custom hook to use the context
export const useModal = () => {
  return useContext(ModalContext);
};

// Create the context provider component
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const openModal = () => {
    setIsOpen(true);
    setSuccessMessage('');
  };

  const closeModal = () => {
    setIsOpen(false);
    setSuccessMessage('');
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
  };

  // Values to be provided to consumers
  const value = {
    isOpen,
    openModal,
    closeModal,
    successMessage,
    showSuccess
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};