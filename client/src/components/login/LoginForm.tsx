import style from "./loginForm.module.css";
import { FormInput } from "../form/formInput";
import Button from "@mui/material/Button";
import { loginActionFormik } from "../../utils/useFormik";
import { Link } from "react-router-dom";
import { useUserContext } from "../../utils/userContext";

export const LoginForm = () => {
  const { logIn, users } = useUserContext();
  const formik = loginActionFormik(logIn);
  console.log(users);

  return (
    <form onSubmit={formik.handleSubmit} className={style.container}>
      <FormInput formik={formik} accessor={"login"} />
      <FormInput formik={formik} accessor={"password"} />
      <div className={style.buttons}>
        <Button type="submit" variant="outlined" className={style.button}>
          Login
        </Button>
        <Link to={"/register"} className={style.link}>
          <Button variant="contained" className={style.button}>
            Register
          </Button>
        </Link>
      </div>
    </form>
  );
};
