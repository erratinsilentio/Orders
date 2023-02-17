import { jsx as _jsx } from "react/jsx-runtime";
import { useNotificationContext } from "../../utils/NotificationContext";
import style from "./modal.module.css";
export const Notification = () => {
    const { notification, message } = useNotificationContext();
    return (_jsx("div", { className: `${style.container} ${!notification
            ? null
            : notification === "error"
                ? style.error
                : style.success}`, children: message ? message : "Oops! No message today:(" }));
};
