import { useFormik } from "formik";
import { orderSchema } from "../utils/orderSchema";
import { FormInput } from "../components/form/formInput";
import { FormSelect } from "../components/form/formSelect";
import { clientData } from "../data";

export const AddOrderPage = () => {
  const formik = useFormik({
    initialValues: {
      Klient: "",
      Tytul: "",
      Opis: "",
      Ilosc: "",
    },
    validationSchema: orderSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormSelect accessor="Klient" formik={formik} data={clientData} />
      <FormInput accessor="Tytuł" formik={formik} />
      <FormInput accessor="Ilość" formik={formik} />
      <FormInput accessor="Opis" formik={formik} />
      <button type="submit">Send</button>
    </form>
  );
};
