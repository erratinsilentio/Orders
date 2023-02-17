import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import style from "./fullCard.module.css";
import { deleteClient } from "../../api/clients";
import Button from "@mui/material/Button";
import { DataBox } from "./Box";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatName } from "../../utils/formatName";
import { formatPhone } from "../../utils/formatPhone";
import useConfirm from "../../utils/useConfirm";
import { useNotificationContext } from "../../utils/NotificationContext";
export const FullClientCard = ({ client }) => {
    const navigate = useNavigate();
    const { showModal } = useConfirm();
    const { setSuccess, setError } = useNotificationContext();
    const showConfirm = async () => {
        const isConfirmed = await showModal();
        if (isConfirmed) {
            deleteClient(client.id)
                .then(() => {
                setSuccess();
                navigate("/clients");
            })
                .catch(setError);
        }
    };
    if (!client)
        return _jsx("p", { children: "loading..." });
    return (_jsx(DataBox, { className: style.box, children: _jsxs("div", { className: style.container, children: [_jsx("div", { className: style.left, children: _jsx(Avatar, { style: { background: "#2e3b65" }, "aria-label": "recipe", alt: client.imie + " " + client.nazwisko, src: client.zdjecie, children: "R" }) }), _jsxs("div", { className: style.right, children: [_jsx("p", { children: formatName(client.imie + " " + client.nazwisko) }), _jsx("p", { children: "ul. " + formatName(client.ulica) }), _jsx("p", { children: formatName(client.miasto) + ", " + client.kod }), _jsx("p", { children: formatPhone(client.telefon) }), _jsx("p", { children: _jsxs(Accordion, { className: style.accord, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel1a-content", id: "panel1a-header", children: _jsx(Typography, { children: "Orders" }) }), _jsx(AccordionDetails, { children: _jsx(Typography, { children: _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 250 }, "aria-label": "simple table", children: [_jsx(TableHead, { children: _jsx(TableRow, { children: _jsx(TableCell, { children: "Nr zam\u00F3wienia" }) }) }), _jsx(TableBody, { children: client.orders &&
                                                                client.orders.map((order) => (_jsx(TableRow, { sx: {
                                                                        "&:last-child td, &:last-child th": {
                                                                            border: 0,
                                                                        },
                                                                    }, children: _jsx(TableCell, { component: "th", scope: "row", children: _jsx(Link, { to: `/orders/${order}`, children: "#" + order }) }) }, order))) })] }) }) }) })] }) }), _jsxs("div", { className: style.buttons, children: [_jsx(Link, { to: `/clients/${client.id}/edit`, className: style.link, children: _jsx(Button, { variant: "outlined", children: "Edit" }) }), _jsx(Button, { onClick: showConfirm, variant: "outlined", children: "DELETE" })] })] })] }) }));
};
