import { useNotificationContext } from "../../utils/NotificationContext";
import style from "./modal.module.css";

export const Modal = () => {
  const { notification, message } = useNotificationContext();
  return (
    <div
      className={`${style.container} ${
        !notification ? null : notification === "error" ? style.error : style.success
      }`}
    >
      {message ? message : "Oops! No message today:("}
    </div>
  );
};
