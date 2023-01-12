import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClientsPage } from "./routes/ClientsPage";
import { AddClientPage } from "./routes/AddClientPage";
import { ClientDetailsPage } from "./routes/ClientDetailsPage";
import { EditClientPage } from "./routes/EditClientPage";
import { OrdersPage } from "./routes/OrdersPage";
import { OrderDetailsPage } from "./routes/OrderDetailsPage";
import { AddOrderPage } from "./routes/AddOrderPage";
import { InvoicesPage } from "./routes/InvoicesPage";
import { RegisterPage } from "./routes/RegisterPage";
import { ProtectedWrapper } from "./utils/ProtectedWrapped";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/clients",
        element: <ClientsPage />,
      },
      {
        path: "/clients/add",
        element: <AddClientPage />,
      },
      {
        path: "/clients/:id",
        element: <ClientDetailsPage />,
      },
      {
        path: "/clients/:id/edit",
        element: <EditClientPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/orders/:id",
        element: <OrderDetailsPage />,
      },
      {
        path: "/orders/add",
        element: <AddOrderPage />,
      },
      {
        path: "/invoices/",
        element: (
          <ProtectedWrapper>
            <InvoicesPage />
          </ProtectedWrapper>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
