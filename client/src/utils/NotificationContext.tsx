import React, { useContext } from "react";
import { createContext, useState } from "react";

type SetFunc = () => void;

type Notification = "error" | "success" | null;

interface Value {
  notification: Notification;
  message: string;
  setSuccess: SetFunc;
  setError: SetFunc;
}

const NotificationContext = createContext<Value | undefined>(undefined);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notification, setNotification] = useState<Notification>(null);
  const [message, setMessage] = useState<string>("");

  const setSuccess: SetFunc = () => {
    setNotification("success");
    setMessage("Success!");
    setTimeout(() => {
      setNotification(null);
      setMessage("");
    }, 3000);
  };

  const setError: SetFunc = () => {
    setNotification("error");
    setMessage("Something went wrong!");
    setTimeout(() => {
      setNotification(null);
      setMessage("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider
      value={{ notification, message, setSuccess, setError } as Value}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const ctx = useContext(NotificationContext);

  if (!ctx) {
    throw new Error(
      "Missing notificationContext, it's not wrapped in NotificationProvider"
    );
  }
  return ctx;
};
