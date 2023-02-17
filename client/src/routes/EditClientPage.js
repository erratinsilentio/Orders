import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormInput } from "../components/form/formInput";
import { Link, useParams } from "react-router-dom";
import { getClient, updateClient } from "../api/clients";
import { updateClientFormik } from "../utils/useFormik";
import Button from "@mui/material/Button";
import style from "../styles/editClient.module.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNotificationContext } from "../utils/NotificationContext";
export const EditClientPage = () => {
    const queryClient = useQueryClient();
    const params = useParams();
    const { setSuccess, setError } = useNotificationContext();
    const { isLoading, data: client, error, } = useQuery(["client"], () => getClient(params.id));
    const mutation = useMutation(async (values) => {
        return await updateClient(String(params.id), values);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["client"]);
            setSuccess();
        },
        onError: () => {
            setError();
        },
    });
    if (isLoading)
        return _jsx("p", { children: "loading..." });
    if (error)
        return _jsx("p", { children: "loading..." });
    if (!client)
        return _jsx("p", { children: "Blad ladowania danych" });
    const formik = updateClientFormik(client, mutation);
    return (_jsxs("form", { onSubmit: formik.handleSubmit, className: style.form, children: [_jsx("section", { className: style.inputs, children: Object.keys(formik.initialValues).map((el) => (_jsx(FormInput, { accessor: el, formik: formik }, el))) }), _jsxs("section", { className: style.buttons, children: [_jsx(Link, { to: `/clients/${params.id}`, className: style.link, children: _jsx(Button, { onClick: formik.handleSubmit, variant: "outlined", className: style.btn, children: "Update" }) }), _jsx(Link, { to: `/clients/${params.id}`, className: style.link, children: _jsx(Button, { variant: "outlined", className: style.btn, children: "Cancel" }) })] })] }));
};
