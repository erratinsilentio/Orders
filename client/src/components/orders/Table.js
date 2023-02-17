import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { formatPhone } from "../../utils/formatPhone";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/orderSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotificationContext } from "../../utils/NotificationContext";
import { changeOrderStatus } from "../../api/orders";
export const DataTable = ({ orders }) => {
    const orderState = useSelector((state) => state.order);
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { setSuccess, setError } = useNotificationContext();
    const mutation = useMutation(async (values) => {
        return await changeOrderStatus(values.id, "awaiting");
    }, {
        onSuccess: (values) => {
            queryClient.invalidateQueries(["orders"]);
            dispatch(add(values));
            setSuccess();
        },
        onError: () => {
            setError();
        },
    });
    return (_jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", style: { backgroundColor: "#f0f9ff" }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Klient" }), _jsx(TableCell, { align: "right", children: "Tytu\u0142" }), _jsx(TableCell, { align: "right", children: "Ilo\u015B\u0107" }), _jsx(TableCell, { align: "right", children: "Detale" }), _jsx(TableCell, { align: "right", children: "Przenie\u015B" })] }) }), _jsx(TableBody, { children: orders.map((order) => (_jsxs(TableRow, { sx: { "&:last-child td, &:last-child th": { border: 0 } }, children: [_jsx(TableCell, { component: "th", scope: "row", children: formatPhone(order.telefon) }), _jsx(TableCell, { align: "right", children: order.tytul }), _jsx(TableCell, { align: "right", children: order.ilosc }), _jsx(TableCell, { align: "right", children: _jsx(Link, { to: `/orders/${order.id}`, children: "Wi\u0119cej" }) }), _jsx(TableCell, { align: "right", children: _jsx(Checkbox, { onChange: () => mutation.mutate(order), checked: order.status !== "new" && true, disabled: order.status !== "new" && true }) })] }, order.id))) })] }) }));
};
