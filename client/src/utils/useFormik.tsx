import { useFormik } from "formik";
import { AddClientForm, addClientValidationSchema } from "./clientSchema";
import { addClient, updateClient } from "../api/clients";
import { Client } from "../data";
import { loginForm, registerForm } from "./userSchema";
import { loginValidationSchema, registerValidationSchema } from "./userSchema";
import { AddOrderForm, orderSchema } from "./orderSchema";

export const addClientFormik = (mutation) => {
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
    enableReinitialize: true,
    onSubmit: (values) => {
      mutation.mutate(values);
      alert("Client added!");
    },
  });
  return formik;
};

export const updateClientFormik = (client: Client, mutation) => {
  const formik = useFormik<AddClientForm>({
    initialValues: {
      imie: client.imie || "",
      nazwisko: client.nazwisko || "",
      ulica: client.ulica || "",
      kod: client.kod || "",
      miasto: client.miasto || "",
      region: client.region || "",
      zdjecie: client.zdjecie || "",
      telefon: client.telefon || "",
    },
    validationSchema: addClientValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      mutation.mutate(values);
      alert("Client updated!");
    },
  });
  return formik;
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

export const addOrderFormik = (mutation) => {
  const formik = useFormik<AddOrderForm>({
    initialValues: {
      telefon: "",
      tytul: "",
      opis: "",
      ilosc: "",
    },
    validationSchema: orderSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return formik;
};
