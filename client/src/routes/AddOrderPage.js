import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormInput } from "../components/form/formInput";
import { FormSelect } from "../components/form/formSelect";
import { getAllClients, updateClientsOrders } from "../api/clients";
import { addOrder } from "../api/orders";
import Button from "@mui/material/Button";
import style from "../styles/addOrder.module.css";
import { addOrderFormik } from "../utils/useFormik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNotificationContext } from "../utils/NotificationContext";
export const AddOrderPage = () => {
    const queryClient = useQueryClient();
    const { setSuccess, setError } = useNotificationContext();
    const { data: clients, isLoading, error, } = useQuery(["clients"], getAllClients);
    const mutation = useMutation(async (values) => {
        return addOrder(values).then((order) => updateClientsOrders(values.telefon, order.id));
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["clients", "orders"]);
            setSuccess();
        },
        onError: () => {
            setError();
        },
    });
    const formik = addOrderFormik(mutation);
    if (isLoading)
        return _jsx("p", { children: "loading..." });
    if (error)
        return _jsx("p", { children: "error!" });
    return (_jsxs("div", { className: style.container, children: [" ", _jsxs("form", { onSubmit: formik.handleSubmit, className: style.form, children: [_jsx(FormSelect, { accessor: "telefon", formik: formik, data: clients, className: style.input }), _jsx(FormInput, { accessor: "tytul", formik: formik, className: style.input }), _jsx(FormInput, { accessor: "ilosc", formik: formik, className: style.input }), _jsx(FormInput, { accessor: "opis", formik: formik, className: style.input }), _jsx(FormInput, { accessor: "kwota", formik: formik, className: style.input }), _jsx(Button, { type: "submit", className: style.button, variant: "outlined", children: "Send" })] })] }));
};
