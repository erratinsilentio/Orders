import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useRef } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotificationContext } from "./NotificationContext";
const UserContext = createContext(undefined);
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const loggedUser = useRef({});
    const { setSuccess, setError } = useNotificationContext();
    const navigate = useNavigate();
    const addNewUser = (user) => {
        const checkIfUserExists = users.some((person) => person.email === user.email || person.login === user.login);
        if (checkIfUserExists) {
            setError();
            return;
        }
        setUsers((users) => [...users, user]);
        setSuccess();
        navigate("/");
    };
    const logIn = (user) => {
        console.log("logging in...");
        if (isLoggedIn)
            return;
        const logger = users.find((person) => person.login === user.login && person.password === user.password);
        if (logger) {
            setIsLoggedIn(true);
            loggedUser.current = logger;
            setSuccess();
        }
        else {
            setError();
        }
    };
    const logOut = () => {
        setIsLoggedIn(null);
    };
    return (_jsx(UserContext.Provider, { value: { users, addNewUser, logIn, logOut, isLoggedIn, loggedUser }, children: children }));
};
export const useUserContext = () => {
    const ctx = useContext(UserContext);
    if (!ctx) {
        throw new Error("Missing themeContext, it's not wrapped in ThemeProvider");
    }
    return ctx;
};
