import { useFormik } from "formik";
import { AddClientForm, addClientValidationSchema } from "../utils/clientSchema";
import { FormInput } from "../components/form/formInput";
import { addClient } from "../api/clients";
import { ClientActionFormik } from "../utils/useFormik";

export const AddClientPage = () => {
  const formik = ClientActionFormik("add");

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* {Object.keys(formik.initialValues).map(el=>)} */}
      <FormInput<AddClientForm> accessor="imie" formik={formik} />
      <FormInput<AddClientForm> accessor="nazwisko" formik={formik} />
      <FormInput<AddClientForm> accessor="ulica" formik={formik} />
      <FormInput<AddClientForm> accessor="kod" formik={formik} />
      <FormInput<AddClientForm> accessor="miasto" formik={formik} />
      <FormInput<AddClientForm> accessor="region" formik={formik} />
      <FormInput<AddClientForm> accessor="zdjecie" formik={formik} />
      <FormInput<AddClientForm> accessor="telefon" formik={formik} />
      <button>Send</button>
    </form>
  );
};
