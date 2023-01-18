import { useFormik } from "formik";
import { AddClientForm, addClientValidationSchema } from "./clientSchema";
import { addClient, updateClient } from "../api/clients";
import { Client } from "../data";
import { loginForm, registerForm } from "./userSchema";
import { loginValidationSchema, registerValidationSchema } from "./userSchema";
import { AddOrderForm, orderSchema } from "./orderSchema";
import { UseMutationResult } from "@tanstack/react-query";
import { User } from "./UserContext";
import { moneyForm, moneyValidationSchema } from "./moneySchema";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { deposit, withdraw } from "../store/moneySlice";
import { useNotificationContext } from "./NotificationContext";

export const addClientFormik = (mutation: UseMutationResult) => {
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
    },
  });
  return formik;
};

export const updateClientFormik = (
  client: Client,
  mutation: UseMutationResult
) => {
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
    },
  });
  return formik;
};

export const loginActionFormik = (logIn: (user: User) => void) => {
  const formik = useFormik<loginForm>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      logIn(values);
    },
  });
  return formik;
};

export const registerActionFormik = (addUser: (user: User) => void) => {
  const formik = useFormik<registerForm>({
    initialValues: {
      email: "",
      login: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values: User | registerForm) => {
      addUser(values);
    },
  });
  return formik;
};

export const addOrderFormik = (mutation: UseMutationResult) => {
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

export type MoneyAction = "withdraw" | "deposit";

export const moneyFormik = (action: MoneyAction) => {
  const dispatch = useDispatch();
  const { setSuccess, setError } = useNotificationContext();

  const formik = useFormik<moneyForm>({
    initialValues: {
      amount: 0,
    },
    validationSchema: moneyValidationSchema,
    onSubmit: (values) => {
      try {
        action === "withdraw"
          ? dispatch(withdraw(Number(values.amount)))
          : dispatch(deposit(Number(values.amount)));
        setSuccess();
      } catch {
        setError();
      }
    },
  });

  return formik;
};
