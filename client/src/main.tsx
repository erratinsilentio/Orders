import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import { ThemeProvider } from "./utils/ThemeContext";
import { NotificationProvider } from "./utils/NotificationContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { router } from "./utils/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </ErrorBoundary>
      </Provider>
    </NotificationProvider>
  </React.StrictMode>
);
