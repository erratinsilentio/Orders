import { FormInput } from "../components/form/formInput";
import {
  addClientValidationSchema,
  AddClientForm,
} from "../utils/clientSchema";
import { Link, useParams } from "react-router-dom";
import { getClient, updateClient } from "../api/clients";
import { ClientActionFormik } from "../utils/useFormik";
import Button from "@mui/material/Button";
import style from "../styles/editClient.module.css";
import { useEffect, useState } from "react";
import { Client } from "../data";
import { useFormik } from "formik";

export const EditClientPage = () => {
  const params = useParams();
  const [client, setClient] = useState<Client | null>(null);

  const formik = useFormik<AddClientForm>({
    initialValues: {
      imie: client?.imie || "",
      nazwisko: client?.nazwisko || "",
      ulica: client?.ulica || "",
      kod: client?.kod || "",
      miasto: client?.miasto || "",
      region: client?.region || "",
      zdjecie: client?.zdjecie || "",
      telefon: client?.telefon || "",
    },
    validationSchema: addClientValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateClient(String(client.id), values);
      alert("Client updated!");
    },
  });

  useEffect(() => {
    if (!!params.id) {
      getClient(params.id).then((data) => {
        setClient(data);
      });
    }
  }, [params]);

  // if (!client) return <p>loading...</p>;

  // const formik = client ? ClientActionFormik("update", client) : null;

  if (!formik) return <p>loading...</p>;

  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <section className={style.inputs}>
        {Object.keys(formik.initialValues).map((el) => (
          <FormInput<AddClientForm> accessor={el} formik={formik} key={el} />
        ))}
      </section>
      <section className={style.buttons}>
        <Link to={`/clients/${params.id}`} className={style.link}>
          <Button
            onClick={formik.handleSubmit}
            variant="outlined"
            className={style.btn}
          >
            Update
          </Button>
        </Link>
        <Link to={`/clients/${params.id}`} className={style.link}>
          <Button variant="outlined" className={style.btn}>
            Cancel
          </Button>
        </Link>
      </section>
    </form>
  );
};
