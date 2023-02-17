import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useState } from "react";
import { BasicSelect } from "../components/invoices/Select";
import BasicTable from "../components/invoices/Table";
import { changeOrderStatus, getOrder } from "../api/orders";
import { deposit } from "../store/moneySlice";
import { pay } from "../store/orderSlice";
import { useNotificationContext } from "../utils/NotificationContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const InvoicesPage = () => {
    const queryClient = useQueryClient();
    const orders = useSelector((state) => state.order);
    const { setSuccess, setError } = useNotificationContext();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("");
    const mutation = useMutation(async (values) => {
        return getOrder(values).then((order) => changeOrderStatus(order.id, "payed").then((payedOrder) => {
            dispatch(deposit(payedOrder[0].kwota));
            dispatch(pay(payedOrder[0].id));
        }));
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["orders"]);
            setSuccess();
        },
        onError: () => {
            setError();
        },
    });
    const handlePay = async (id) => mutation.mutate(id);
    return (_jsxs(_Fragment, { children: [_jsx(BasicTable, { orders: orders }), _jsxs("section", { style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }, children: [_jsx(BasicSelect, { orders: orders, setSelected: setSelected, selected: selected }), _jsx(Button, { variant: "outlined", onClick: () => handlePay(selected), style: { minWidth: "49%" }, children: "ROZLICZ" })] })] }));
};
