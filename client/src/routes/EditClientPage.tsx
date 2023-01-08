import { useFormik } from "formik";
import { FormInput } from "../components/form/formInput";
import { addClientValidationSchema, AddClientForm } from "../utils/clientSchema";
import { useLocation, Link, useParams } from "react-router-dom";
import { getClient, updateClient } from "../api/clients";
import { ClientActionFormik } from "../utils/useFormik";
import Button from "@mui/material/Button";
import style from "../styles/editClient.module.css";
import { useEffect, useState } from "react";
import { Client } from "../data";

export const EditClientPage = () => {
  const [client, setClient] = useState(null);

  const params = useParams();

  useEffect(() => {
    getClient(params.id).then((data) => setClient(data));
  }, []);

  if (!client) return <p>loading...</p>;

  const formik = ClientActionFormik("update", client);

  console.log("siema", client);
  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <section className={style.inputs}>
        {Object.keys(formik.initialValues).map(
          (el) =>
            el !== "orders" && <FormInput<AddClientForm> accessor={el} formik={formik} key={el} />
        )}
      </section>
      <section className={style.buttons}>
        <Link to={`/clients/${params.id}`} className={style.link}>
          <Button onClick={formik.handleSubmit} variant="outlined" className={style.btn}>
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
