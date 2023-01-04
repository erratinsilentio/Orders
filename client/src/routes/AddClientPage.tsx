import { useFormik } from "formik";
import { AddClientForm, addClientValidationSchema } from "../utils/clientSchema";
import { FormInput } from "../components/form/formInput";
import { addClient } from "../api/clients";
import { ClientActionFormik } from "../utils/useFormik";
import style from "../styles/addClient.module.css";
import Button from "@mui/material/Button";

export const AddClientPage = () => {
  const formik = ClientActionFormik("add");
  if (!formik) return <p>loading...</p>;

  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <section className={style.inputs}>
        {Object.keys(formik.initialValues).map((el) => (
          <FormInput<AddClientForm> accessor={el} formik={formik} key={el} />
        ))}
      </section>
      <section className={style.buttons}>
        <Button onClick={formik.handleSubmit} variant="outlined" className={style.btn}>
          Submit
        </Button>
      </section>
    </form>
  );
};
