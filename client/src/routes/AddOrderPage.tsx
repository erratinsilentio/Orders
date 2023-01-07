import { useFormik } from "formik";
import { orderSchema } from "../utils/orderSchema";
import { FormInput } from "../components/form/formInput";
import { FormSelect } from "../components/form/formSelect";
import { useState, useEffect } from "react";
import { getAllClients, updateClientsOrders } from "../api/clients";
import { addOrder } from "../api/orders";
import Button from "@mui/material/Button";
import style from "../styles/addOrder.module.css";

export const AddOrderPage = () => {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    getAllClients().then((data) => setClients(data));
  }, []);

  const formik = useFormik({
    initialValues: {
      telefon: "",
      tytul: "",
      opis: "",
      ilosc: "",
    },
    validationSchema: orderSchema,
    onSubmit: (values) => {
      console.log(values.telefon);
      alert(JSON.stringify(values, null, 2));
      addOrder(values).then((order) => updateClientsOrders(values.telefon, order));
    },
  });
  if (!clients) return <p>loading...</p>;
  return (
    <div className={style.container}>
      {" "}
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <FormSelect accessor="telefon" formik={formik} data={clients} className={style.input} />
        <FormInput accessor="tytul" formik={formik} className={style.input} />
        <FormInput accessor="ilosc" formik={formik} className={style.input} />
        <FormInput accessor="opis" formik={formik} className={style.input} />
        <Button type="submit" className={style.button} variant="outlined">
          Send
        </Button>
      </form>
    </div>
  );
};
