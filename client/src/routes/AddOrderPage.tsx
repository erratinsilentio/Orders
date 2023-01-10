import { FormInput } from "../components/form/formInput";
import { FormSelect } from "../components/form/formSelect";
import { getAllClients, updateClientsOrders } from "../api/clients";
import { addOrder } from "../api/orders";
import Button from "@mui/material/Button";
import style from "../styles/addOrder.module.css";
import { Client } from "../data";
import { AddClientForm } from "../utils/clientSchema";
import { addOrderFormik } from "../utils/useFormik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const AddOrderPage = () => {
  const queryClient = useQueryClient();

  const {
    data: clients,
    isLoading,
    error,
  } = useQuery(["clients"], getAllClients);

  const mutation = useMutation(
    async (values) => {
      return addOrder(values).then((order) =>
        updateClientsOrders(values.telefon, order)
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["clients"]);
      },
      onError: () => {
        console.log("Cos poszlo nie tak");
      },
    }
  );

  const formik = addOrderFormik(mutation);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error!</p>;

  return (
    <div className={style.container}>
      {" "}
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <FormSelect
          accessor="telefon"
          formik={formik}
          data={clients}
          className={style.input}
        />
        <FormInput<AddClientForm>
          accessor="tytul"
          formik={formik}
          className={style.input}
        />
        <FormInput<AddClientForm>
          accessor="ilosc"
          formik={formik}
          className={style.input}
        />
        <FormInput<AddClientForm>
          accessor="opis"
          formik={formik}
          className={style.input}
        />
        <Button type="submit" className={style.button} variant="outlined">
          Send
        </Button>
      </form>
    </div>
  );
};
