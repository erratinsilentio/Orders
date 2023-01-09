import { FormInput } from "../components/form/formInput";
import style from "../styles/registerPage.module.css";
import { registerActionFormik } from "../utils/useFormik";
import Button from "@mui/material/Button";

export const RegisterPage = () => {
  const formik = registerActionFormik();
  return (
    <div className={style.container}>
      <FormInput accessor={"email"} formik={formik} />
      <FormInput accessor={"login"} formik={formik} />
      <FormInput accessor={"password"} formik={formik} />
      <Button variant="outlined" className={style.button}>
        Register
      </Button>
    </div>
  );
};
