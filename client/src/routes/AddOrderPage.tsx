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
      Klient: "",
      Tytul: "",
      Opis: "",
      Ilosc: "",
    },
    validationSchema: orderSchema,
    onSubmit: (values) => {
      console.log(values.Klient);
      alert(JSON.stringify(values, null, 2));
      addOrder(values).then((order) => updateClientsOrders(values.Klient, order));
    },
  });
  if (!clients) return <p>loading...</p>;
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormSelect accessor="Klient" formik={formik} data={clients} />
      <FormInput accessor="Tytul" formik={formik} />
      <FormInput accessor="Ilosc" formik={formik} />
      <FormInput accessor="Opis" formik={formik} />
      <button type="submit">Send</button>
    </form>
  );
};
