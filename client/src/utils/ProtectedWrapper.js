import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext";
export const ProtectedWrapper = ({ children, }) => {
    const { isLoggedIn } = useUserContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn)
            navigate("/");
    }, []);
    return _jsx(_Fragment, { children: children });
};
