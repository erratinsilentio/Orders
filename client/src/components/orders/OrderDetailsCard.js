import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import style from "./orderDetails.module.css";
import { DataBox } from "../card/Box";
import { formatName } from "../../utils/formatName";
import Button from "@mui/material/Button";
import { deleteOrder } from "../../api/orders";
import { deleteClientsOrder } from "../../api/clients";
import { useNotificationContext } from "../../utils/NotificationContext";
import useConfirm from "../../utils/useConfirm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const FullOrderCard = ({ order, client }) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { showModal } = useConfirm();
    const { setSuccess, setError } = useNotificationContext();
    const mutation = useMutation(async (values) => {
        return deleteOrder(values.id).then((data) => {
            deleteClientsOrder(data.telefon, data);
        });
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["clients", "orders", "order"]);
            setSuccess();
            navigate("/orders");
        },
        onError: () => {
            setError();
        },
    });
    const showConfirm = async () => {
        const isConfirmed = await showModal();
        if (isConfirmed) {
            mutation.mutate(order);
        }
    };
    return (_jsx(DataBox, { className: style.box, children: _jsx("div", { className: style.container, children: _jsxs("div", { className: style.right, children: [_jsx("p", { children: _jsx(Link, { to: `/clients/${client.id}`, children: formatName(client.imie + " " + client.nazwisko) }) }), _jsxs("p", { children: ["Tytu\u0142: ", order.tytul] }), _jsxs("p", { children: ["Opis: ", order.opis] }), _jsxs("p", { children: ["Ilo\u015B\u0107: ", order.ilosc] }), _jsx(Button, { onClick: showConfirm, variant: "outlined", children: "DELETE" })] }) }) }));
};
