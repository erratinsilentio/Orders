import { jsx as _jsx } from "react/jsx-runtime";
import App from "../App";
import { ClientsPage } from "../routes/ClientsPage";
import { AddClientPage } from "../routes/AddClientPage";
import { ClientDetailsPage } from "../routes/ClientDetailsPage";
import { EditClientPage } from "../routes/EditClientPage";
import { OrdersPage } from "../routes/OrdersPage";
import { OrderDetailsPage } from "../routes/OrderDetailsPage";
import { AddOrderPage } from "../routes/AddOrderPage";
import { InvoicesPage } from "../routes/InvoicesPage";
import { RegisterPage } from "../routes/RegisterPage";
import { Loading } from "../utils/Loading";
import { Suspense } from "react";
import { MoneyPage } from "../routes/MoneyPage";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: "/register",
                element: _jsx(RegisterPage, {}),
            },
            {
                path: "/clients",
                element: _jsx(ClientsPage, {}),
            },
            {
                path: "/clients/add",
                element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(AddClientPage, {}) })),
            },
            {
                path: "/clients/:id",
                element: _jsx(ClientDetailsPage, {}),
            },
            {
                path: "/clients/:id/edit",
                element: _jsx(EditClientPage, {}),
            },
            {
                path: "/orders",
                element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(OrdersPage, {}) })),
            },
            {
                path: "/orders/:id",
                element: _jsx(OrderDetailsPage, {}),
            },
            {
                path: "/orders/add",
                element: _jsx(AddOrderPage, {}),
            },
            {
                path: "/invoices",
                element: (
                // <ProtectedWrapper>
                _jsx(InvoicesPage, {})
                // </ProtectedWrapper>
                ),
            },
            {
                path: "/money",
                element: _jsx(MoneyPage, {}),
            },
        ],
    },
]);
