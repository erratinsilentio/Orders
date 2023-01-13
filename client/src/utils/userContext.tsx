import React, { useContext, useRef } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "./NotificationContext";

export type User = {
  email: string;
  login: string;
  password: string;
};

const UserContext = createContext(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);
  const loggedUser = useRef<User | {}>({});

  const { setSuccess, setError } = useNotificationContext();
  const navigate = useNavigate();

  const addNewUser = (user: User) => {
    const checkIfUserExists = users.some(
      (person) => person.email === user.email || person.login === user.login
    );
    if (checkIfUserExists) {
      setError();
      return;
    }

    setUsers((users) => [...users, user]);
    setSuccess();
    navigate("/");
  };

  const logIn = (user: User) => {
    console.log("logging in...");
    if (isLoggedIn) return;

    const logger = users.find(
      (person) => person.login === user.login && person.password === user.password
    );

    if (logger) {
      setIsLoggedIn(true);
      loggedUser.current = logger;
      setSuccess();
    } else {
      setError();
    }
  };

  const logOut = () => {
    setIsLoggedIn(null);
  };

  return (
    <UserContext.Provider value={{ users, addNewUser, logIn, logOut, isLoggedIn, loggedUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error("Missing themeContext, it's not wrapped in ThemeProvider");
  }
  return ctx;
};
