import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormInput } from "../components/form/formInput";
import style from "../styles/registerPage.module.css";
import { registerActionFormik } from "../utils/useFormik";
import Button from "@mui/material/Button";
import { useUserContext } from "../utils/UserContext";
export const RegisterPage = () => {
    const { addNewUser } = useUserContext();
    const formik = registerActionFormik(addNewUser);
    return (_jsxs("form", { onSubmit: formik.handleSubmit, className: style.container, children: [_jsx(FormInput, { accessor: "email", formik: formik }), _jsx(FormInput, { accessor: "login", formik: formik }), _jsx(FormInput, { accessor: "password", formik: formik }), _jsx(Button, { variant: "outlined", className: style.button, type: "submit", children: "Register" })] }));
};
