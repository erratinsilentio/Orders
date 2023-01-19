import { useFormik } from "formik";
import {
  AddClientForm,
  addClientValidationSchema,
} from "../utils/clientSchema";
import { FormInput } from "../components/form/formInput";
import { addClient } from "../api/clients";
import { addClientFormik } from "../utils/useFormik";
import style from "../styles/addClient.module.css";
import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Client } from "../data";

export const AddClientPage = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (values: Client) => {
      return await addClient(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["client"]);
      },
      onError: () => {
        console.log("Cos poszlo nie tak");
      },
    }
  );

  const formik = addClientFormik(mutation);

  if (!formik) return <p>loading...</p>;

  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <section className={style.inputs}>
        {Object.keys(formik.initialValues).map((el) => (
          <FormInput<AddClientForm> accessor={el} formik={formik} key={el} />
        ))}
      </section>
      <section className={style.buttons}>
        <Button
          onClick={formik.handleSubmit}
          variant="outlined"
          className={style.btn}
        >
          Submit
        </Button>
      </section>
    </form>
  );
};
