import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormInput } from "../components/form/formInput";
import { addClient } from "../api/clients";
import { addClientFormik } from "../utils/useFormik";
import style from "../styles/addClient.module.css";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotificationContext } from "../utils/NotificationContext";
export const AddClientPage = () => {
    const queryClient = useQueryClient();
    const { setSuccess, setError } = useNotificationContext();
    const mutation = useMutation(async (values) => {
        return await addClient(values);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["client"]);
            setSuccess();
        },
        onError: () => {
            setError();
        },
    });
    const formik = addClientFormik(mutation);
    if (!formik)
        return _jsx("p", { children: "loading..." });
    return (_jsxs("form", { onSubmit: formik.handleSubmit, className: style.form, children: [_jsx("section", { className: style.inputs, children: Object.keys(formik.initialValues).map((el) => (_jsx(FormInput, { accessor: el, formik: formik }, el))) }), _jsx("section", { className: style.buttons, children: _jsx(Button, { onClick: formik.handleSubmit, variant: "outlined", className: style.btn, children: "Submit" }) })] }));
};
