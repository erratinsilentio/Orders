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
import { clientData } from "./data";
// create error
// create loading

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
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
        element: <InvoicesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
