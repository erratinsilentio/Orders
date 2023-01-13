import React, { useContext } from "react";
import { createContext, useState } from "react";

const NotificationContext = createContext(undefined);

type Notification = "error" | "success" | null;
export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = useState<Notification>(null);
  const [message, setMessage] = useState<string>("");

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
  return (
    <NotificationContext.Provider value={{ notification, message, setSuccess, setError }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const ctx = useContext(NotificationContext);

  if (!ctx) {
    throw new Error("Missing notificationContext, it's not wrapped in NotificationProvider");
  }
  return ctx;
};
