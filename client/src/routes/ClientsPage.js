import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import style from "../styles/clients.module.css";
import { SmallClientCard } from "../components/card/SmallClientCard";
import { getAllClients } from "../api/clients";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";
import { useThemeContext } from "../utils/ThemeContext";
import { useState } from "react";
export const ClientsPage = () => {
    const { data, isLoading, error } = useQuery(["clients"], getAllClients);
    const { theme } = useThemeContext();
    const [input, setInput] = useState("");
    const searchClient = (client) => {
        const clientName = client.imie + " " + client.nazwisko.toLowerCase();
        const searchName = input.toLowerCase();
        if (clientName.includes(searchName) || searchName === "") {
            return true;
        }
        else {
            return false;
        }
    };
    if (isLoading)
        return _jsx("p", { children: "loading..." });
    if (error)
        return _jsx("p", { children: "error!" });
    return (_jsxs("div", { className: style.container, children: [_jsxs("section", { className: style.action, children: [_jsx(Button, { variant: "outlined", style: { marginRight: "25px" }, children: _jsx(Link, { to: "/clients/add", className: `${style.link} ${style.addLink}`, children: "Add Client" }) }), _jsx(TextField, { sx: {
                            border: `${theme === "dark" && "1px solid var(--primary)"}`,
                            borderRadius: "5px",
                        }, id: "outlined-basic", label: "Search", variant: "outlined", value: input, onChange: (e) => setInput(e.target.value) })] }), _jsx("section", { className: style.cards, children: data?.map((client) => searchClient(client) && (_jsx(Link, { to: `/clients/${client.id}`, state: client, className: style.link, children: _jsx(SmallClientCard, { client: client }, client.id) }, client.id))) })] }));
};
