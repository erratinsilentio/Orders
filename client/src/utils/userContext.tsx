import React, { useContext } from "react";
import { createContext, useState } from "react";

export type User = {
  email: string;
  login: string;
  password: string;
};

const UserContext = createContext(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const addNewUser = (user: User) => {
    setUsers((users) => [...users, user]);
    console.log(user, users);
  };

  const logIn = (user: User) => {
    console.log("logging in...");
    if (isLoggedIn) return;

    if (users.some((person) => person.login === user.login && person.password === user.password))
      setIsLoggedIn(true);
    console.log("logged in");
  };

  const logOut = () => setIsLoggedIn(false);

  return (
    <UserContext.Provider value={{ users, setUsers, addNewUser, logIn, logOut }}>
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
