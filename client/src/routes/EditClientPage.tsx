import { useFormik } from "formik";
import { FormInput } from "../components/form/formInput";
import { addClientValidationSchema } from "../utils/clientSchema";
import { useLocation, Link, useParams } from "react-router-dom";
import { updateClient } from "../api/clients";
import { ClientActionFormik } from "../utils/useFormik";

export const EditClientPage = () => {
  const { state } = useLocation();
  const params = useParams();

  const formik = ClientActionFormik("update", state);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput accessor="imie" formik={formik} />
      <FormInput accessor="nazwisko" formik={formik} />
      <FormInput accessor="ulica" formik={formik} />
      <FormInput accessor="kod" formik={formik} />
      <FormInput accessor="miasto" formik={formik} />
      <FormInput accessor="region" formik={formik} />
      <FormInput accessor="zdjecie" formik={formik} />
      <FormInput accessor="telefon" formik={formik} />
      <button type="submit">
        <Link to={`/clients/${params.id}`}>Update</Link>
      </button>
      <Link to={`/clients/${params.id}`} state={state}>
        <button>Cancel</button>
      </Link>
    </form>
  );
};
