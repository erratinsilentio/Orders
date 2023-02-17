import { jsx as _jsx } from "react/jsx-runtime";
import { FullClientCard } from "../components/card/FullClientCard";
import { useParams } from "react-router-dom";
import { getClient } from "../api/clients";
import { useQuery } from "@tanstack/react-query";
export const ClientDetailsPage = () => {
    const params = useParams();
    const { data: client, isLoading, error, } = useQuery(["client"], () => getClient(params.id));
    if (isLoading)
        return _jsx("p", { children: "loading" });
    if (error)
        return _jsx("p", { children: "error" });
    return _jsx(FullClientCard, { client: client });
};
