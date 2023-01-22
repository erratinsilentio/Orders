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
import { createClient } from "@supabase/supabase-js";

const supaUrl = "https://vqdgzsdkxbytcylllkvi.supabase.co";
const supaKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZGd6c2RreGJ5dGN5bGxsa3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNjI1NDAsImV4cCI6MTk4OTgzODU0MH0.0tKj-_Nh10-wJrGZrOCGnte20b2qCRNODEklkdmhs20";

export const supabase = createClient(supaUrl, supaKey);

async function getCountries() {
  let { data: clients, error } = await supabase.from("clients").select();
  console.log(clients);
}

getCountries();

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
