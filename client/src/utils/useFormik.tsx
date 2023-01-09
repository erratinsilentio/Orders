import { useFormik } from "formik";
import { AddClientForm, addClientValidationSchema } from "./clientSchema";
import { addClient, updateClient } from "../api/clients";
import { Client } from "../data";
import { loginForm, registerForm } from "./userSchema";
import { loginValidationSchema, registerValidationSchema } from "./userSchema";

type Action = "add" | "update";

export const ClientActionFormik = (action: Action, client?: Client) => {
  if (action === "add") {
    const formik = useFormik<AddClientForm>({
      initialValues:
        action === "add"
          ? {
              imie: "",
              nazwisko: "",
              ulica: "",
              kod: "",
              miasto: "",
              region: "",
              zdjecie: "",
              telefon: "",
            }
          : {
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
        action === "add" ? addClient(values) : updateClient(values);
        action === "add" ? alert("Client added!") : alert("Client updated!");
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

export const registerActionFormik = () => {
  const formik = useFormik<registerForm>({
    initialValues: {
      email: "",
      login: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return formik;
};
