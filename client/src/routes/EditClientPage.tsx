import { useFormik } from "formik";
import { FormInput } from "../components/form/formInput";
import { addClientValidationSchema } from "../utils/clientSchema";
import { useLocation, Link, useParams } from "react-router-dom";
import { updateClient } from "../api/clients";

export const EditClientPage = () => {
  const { state } = useLocation();
  const params = useParams();

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
    validationSchema: addClientValidationSchema,
    onSubmit: (values) => {
      // updateClient(String(params.id), values);
      alert(JSON.stringify(values, null, 2));
      console.log("kkkkkkkkk");
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
      <FormInput accessor="Zdjecie" formik={formik} />
      <FormInput accessor="Telefon" formik={formik} />
      <button type="submit">Update</button>
      <Link to={`/clients/${params.id}`} state={state}>
        <button>Cancel</button>
      </Link>
    </form>
  );
};
