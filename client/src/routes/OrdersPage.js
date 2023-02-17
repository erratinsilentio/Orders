import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from "../styles/orders.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataTable } from "../components/orders/Table";
import { getAllOrders } from "../api/orders";
import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../utils/UserContext";
import { useMemo } from "react";
export const OrdersPage = () => {
    const { data, isLoading, error } = useQuery(["orders"], getAllOrders);
    const { users } = useUserContext();
    const table = useMemo(() => {
        return _jsx(DataTable, { orders: data });
    }, [data]);
    if (isLoading)
        return _jsx("p", { children: "loading..." });
    if (error)
        return _jsx("p", { children: "error..." });
    return (_jsxs("div", { className: style.container, children: [_jsx(Link, { to: "/orders/add", className: style.link, children: _jsx(Button, { variant: "outlined", children: "Add order" }) }), table] }));
};
