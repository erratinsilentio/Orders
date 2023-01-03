import { useFormik } from "formik";
import { FormInput } from "../components/form/formInput";
import { yupSchema } from "../utils/clientSchema";
import { useLocation, Link } from "react-router-dom";

export const EditClientPage = () => {
  const { state } = useLocation();
  console.log(state);
  const formik = useFormik({
    initialValues: {
      Imie: state.Imie || "",
      Nazwisko: state.Nazwisko || "",
      Ulica: state.Ulica || "",
      Kod: state.Kod || "",
      Miasto: state.Miasto || "",
      Region: state.Region || "",
      Zdjecie: state.Zdjecie || "",
      Telefon: state.Telefon || "",
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
      <button type="submit">Update</button>
      <Link to={`/clients/${state.ID}`} state={state}>
        <button type="submit">Cancel</button>
      </Link>
    </form>
  );
};
