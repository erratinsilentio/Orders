import style from "./loginForm.module.css";
import { FormInput } from "../form/formInput";
import Button from "@mui/material/Button";
import { loginActionFormik } from "../../utils/useFormik";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const formik = loginActionFormik();

  return (
    <div className={style.container}>
      <FormInput formik={formik} accessor={"login"} />
      <FormInput formik={formik} accessor={"password"} />
      <div className={style.buttons}>
        <Button variant="outlined" className={style.button}>
          Login
        </Button>
        <Link to={"/register"} className={style.link}>
          <Button variant="contained" className={style.button}>
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};
