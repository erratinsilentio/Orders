import { FormInput } from "../components/form/formInput";
import { AddClientForm } from "../utils/clientSchema";
import { Link, useParams } from "react-router-dom";
import { getClient, updateClient } from "../api/clients";
import { updateClientFormik } from "../utils/useFormik";
import Button from "@mui/material/Button";
import style from "../styles/editClient.module.css";
import { Client } from "../data";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const EditClientPage = () => {
  const queryClient = useQueryClient();
  const params = useParams();

  const {
    isLoading,
    data: client,
    error,
  } = useQuery(["client"], () => getClient(params.id));

  const mutation = useMutation(
    async (values) => {
      return await updateClient(String(params.id), values);
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

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>loading...</p>;

  const formik = updateClientFormik(client, mutation);

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
