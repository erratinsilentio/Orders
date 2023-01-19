import React, { useContext } from "react";
import { createContext, useState, useReducer } from "react";
import { reducer, initialState } from "../store/Reducer";

export const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={[state, dispatch]}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error("Missing modalContext, it's not wrapped in ModalProvider");
  }
  return ctx;
};
