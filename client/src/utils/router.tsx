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
import { ProtectedWrapper } from "../utils/ProtectedWrapper";
import { Loading } from "../utils/Loading";
import { Suspense } from "react";
import { MoneyPage } from "../routes/MoneyPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: (
          <Suspense fallback={<Loading />}>
            <AddClientPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<Loading />}>
            <OrdersPage />
          </Suspense>
        ),
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
        path: "/invoices",
        element: (
          // <ProtectedWrapper>
          <InvoicesPage />
          // </ProtectedWrapper>
        ),
      },
      {
        path: "/money",
        element: <MoneyPage />,
      },
    ],
  },
]);
