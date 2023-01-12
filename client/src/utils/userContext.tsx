import React, { useContext, useRef } from "react";
import { createContext, useState } from "react";

export type User = {
  email: string;
  login: string;
  password: string;
};

const UserContext = createContext(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<any>(null);
  const loggedUser = useRef({});

  const addNewUser = (user: User) => {
    setUsers((users) => [...users, user]);
    console.log(user, users);
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
      console.log("logger: ", logger);
      console.log("login: ", loggedUser);
    }
    // console.log("logged in as: ", isLoggedIn);
  };

  const logOut = () => {
    setIsLoggedIn(null);
  };

  return (
    <UserContext.Provider
      value={{ users, setUsers, addNewUser, logIn, logOut, isLoggedIn, setIsLoggedIn }}
    >
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
