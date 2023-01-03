import { useFormik } from "formik";
import { AddClientForm, addClientValidationSchema } from "./clientSchema";
import { addClient, updateClient } from "../api/clients";
import { Client } from "../data";

type Action = "add" | "update";

export const ClientActionFormik = (action: Action, client: Client) => {
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
      },
    });

    return formik;
  } else {
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
