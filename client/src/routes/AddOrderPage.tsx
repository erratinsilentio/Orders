import { useFormik } from "formik";
import { orderSchema } from "../utils/orderSchema";
import { FormInput } from "../components/form/formInput";
import { FormSelect } from "../components/form/formSelect";
import { useState, useEffect } from "react";
import { getAllClients, updateClientsOrders } from "../api/clients";
import { addOrder } from "../api/orders";

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
    <form onSubmit={formik.handleSubmit}>
      <FormSelect accessor="telefon" formik={formik} data={clients} />
      <FormInput accessor="tytul" formik={formik} />
      <FormInput accessor="ilosc" formik={formik} />
      <FormInput accessor="opis" formik={formik} />
      <button type="submit">Send</button>
    </form>
  );
};
