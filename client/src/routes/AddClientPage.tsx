import { useFormik } from "formik";
import { yupSchema } from "../utils/clientSchema";
import { FormInput } from "../components/form/formInput";

export const AddClientPage = () => {
  const formik = useFormik({
    initialValues: {
      Imie: "",
      Nazwisko: "",
      Ulica: "",
      Kod: "",
      Miasto: "",
      Region: "",
      Zdjecie: "",
      Telefon: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput accessor="Imie" formik={formik} />
      <FormInput accessor="Nazwisko" formik={formik} />
      <FormInput accessor="Ulica" formik={formik} />
      <FormInput accessor="Kod" formik={formik} />
      <FormInput accessor="Miasto" formik={formik} />
      <FormInput accessor="Region" formik={formik} />
      <FormInput accessor="Zdjęcie" formik={formik} />
      <FormInput accessor="Telefon" formik={formik} />
      <button type="submit">Send</button>
    </form>
  );
};
