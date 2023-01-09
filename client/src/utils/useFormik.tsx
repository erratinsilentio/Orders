import { useFormik } from "formik";
import { AddClientForm, addClientValidationSchema } from "./clientSchema";
import { addClient, updateClient } from "../api/clients";
import { Client } from "../data";
import { loginForm } from "./userSchema";
import { loginValidationSchema } from "./userSchema";

type Action = "add" | "update";

export const ClientActionFormik = (action: Action, client?: Client) => {
  if (action === "add") {
    const formik = useFormik<AddClientForm>({
      initialValues: {
        imie: "",
        nazwisko: "",
        ulica: "",
        kod: "",
        miasto: "",
        region: "",
        zdjecie: "",
        telefon: "",
      },
      validationSchema: addClientValidationSchema,
      onSubmit: (values) => {
        addClient(values);
        alert("Client added!");
      },
    });
    return formik;
  }

  if (action === "update" && client) {
    const formik = useFormik({
      initialValues: {
        imie: client.imie || "",
        nazwisko: client.nazwisko || "",
        ulica: client.ulica || "",
        kod: client.kod || "",
        miasto: client.miasto || "",
        region: client.region || "",
        zdjecie: client.zdjecie || "",
        telefon: client.telefon || "",
        orders: client.orders || [],
      },
      validationSchema: addClientValidationSchema,
      onSubmit: (values) => {
        updateClient(String(client.id), values);
        alert(JSON.stringify(values, null, 2));
      },
    });
    return formik;
  }
};

export const loginActionFormik = () => {
  const formik = useFormik<loginForm>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return formik;
};
