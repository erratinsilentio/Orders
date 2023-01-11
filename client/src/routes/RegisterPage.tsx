import { FormInput } from "../components/form/formInput";
import style from "../styles/registerPage.module.css";
import { registerActionFormik } from "../utils/useFormik";
import Button from "@mui/material/Button";
import { useUserContext } from "../utils/userContext";

export const RegisterPage = () => {
  const { addNewUser } = useUserContext();
  const formik = registerActionFormik(addNewUser);
  return (
    <form onSubmit={formik.handleSubmit} className={style.container}>
      <FormInput accessor={"email"} formik={formik} />
      <FormInput accessor={"login"} formik={formik} />
      <FormInput accessor={"password"} formik={formik} />
      <Button variant="outlined" className={style.button} type="submit">
        Register
      </Button>
    </form>
  );
};
