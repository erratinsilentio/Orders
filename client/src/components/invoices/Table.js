import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function BasicTable({ orders }) {
    return (_jsx(TableContainer, { component: Paper, style: {
            marginTop: "10px",
            marginBottom: "15px",
            backgroundColor: "#f0f9ff",
        }, children: _jsxs(Table, { sx: { minWidth: 300 }, "aria-label": "simple table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "ID" }), _jsx(TableCell, { align: "right", children: "Tytu\u0142" })] }) }), _jsx(TableBody, { children: orders.map((order) => order.id && (_jsxs(TableRow, { sx: { "&:last-child td, &:last-child th": { border: 0 } }, children: [_jsx(TableCell, { component: "th", scope: "row", children: order.id }), _jsx(TableCell, { align: "right", children: order.tytul })] }, order.id))) })] }) }));
}
