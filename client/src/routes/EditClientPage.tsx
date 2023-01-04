import { useFormik } from "formik";
import { FormInput } from "../components/form/formInput";
import { addClientValidationSchema, AddClientForm } from "../utils/clientSchema";
import { useLocation, Link, useParams } from "react-router-dom";
import { updateClient } from "../api/clients";
import { ClientActionFormik } from "../utils/useFormik";
import Button from "@mui/material/Button";
import style from "../styles/editClient.module.css";

export const EditClientPage = () => {
  const { state } = useLocation();
  const params = useParams();

  const formik = ClientActionFormik("update", state);
  if (!formik) return <p>loading...</p>;

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
