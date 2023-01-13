import React, { useContext } from "react";
import { createContext, useState } from "react";

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [decision, setDecision] = useState<boolean | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDecision(null);
  };

  const makeDecision = (bool: boolean) => {
    if (bool) {
      setDecision(true);
      handleClose();
    } else {
      handleClose();
    }
  };

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose, makeDecision }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error("Missing notificationContext, it's not wrapped in NotificationProvider");
  }
  return ctx;
};
