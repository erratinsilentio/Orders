import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { createContext, useState } from "react";
const NotificationContext = createContext(undefined);
export const NotificationProvider = ({ children, }) => {
    const [notification, setNotification] = useState(null);
    const [message, setMessage] = useState("");
    const setSuccess = () => {
        setNotification("success");
        setMessage("Success!");
        setTimeout(() => {
            setNotification(null);
            setMessage("");
        }, 3000);
    };
    const setError = () => {
        setNotification("error");
        setMessage("Something went wrong!");
        setTimeout(() => {
            setNotification(null);
            setMessage("");
        }, 3000);
    };
    return (_jsx(NotificationContext.Provider, { value: { notification, message, setSuccess, setError }, children: children }));
};
export const useNotificationContext = () => {
    const ctx = useContext(NotificationContext);
    if (!ctx) {
        throw new Error("Missing notificationContext, it's not wrapped in NotificationProvider");
    }
    return ctx;
};
