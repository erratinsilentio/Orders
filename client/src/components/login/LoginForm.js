import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from "./loginForm.module.css";
import { FormInput } from "../form/formInput";
import Button from "@mui/material/Button";
import { loginActionFormik } from "../../utils/useFormik";
import { Link } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext";
export const LoginForm = () => {
    const { logIn, users } = useUserContext();
    const formik = loginActionFormik(logIn);
    return (_jsxs("form", { onSubmit: formik.handleSubmit, className: style.container, children: [_jsx(FormInput, { formik: formik, accessor: "login" }), _jsx(FormInput, { formik: formik, accessor: "password" }), _jsxs("div", { className: style.buttons, children: [_jsx(Button, { type: "submit", variant: "outlined", className: style.button, children: "Login" }), _jsx(Link, { to: "/register", className: style.link, children: _jsx(Button, { variant: "contained", className: style.button, children: "Register" }) })] })] }));
};
