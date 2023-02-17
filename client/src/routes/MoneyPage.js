import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from "../styles/money.module.css";
import Button from "@mui/material/Button";
import { FormInput } from "../components/form/formInput";
import { moneyFormik } from "../utils/useFormik";
import { useRef } from "react";
export const MoneyPage = () => {
    const action = useRef("deposit");
    const formik = moneyFormik(action.current);
    return (_jsxs("form", { className: style.form, onSubmit: formik.handleSubmit, children: [_jsx(FormInput, { accessor: "amount", formik: formik, className: style.input }), _jsx(Button, { onClick: () => (action.current = "deposit"), type: "submit", variant: "outlined", className: style.btn, style: { marginTop: "15px", marginBottom: "5px" }, children: "Deposit" }), _jsx(Button, { onClick: () => (action.current = "withdraw"), type: "submit", variant: "outlined", className: style.btn, children: "Withdraw" })] }));
};
