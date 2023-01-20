import style from "../styles/money.module.css";
import Button from "@mui/material/Button";
import { FormInput } from "../components/form/formInput";
import { MoneyAction, moneyFormik } from "../utils/useFormik";
import { moneyForm } from "../utils/moneySchema";
import { useRef } from "react";

export const MoneyPage = () => {
  const action = useRef<MoneyAction>("deposit");
  const formik = moneyFormik(action.current);

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      <FormInput<moneyForm>
        accessor="amount"
        formik={formik}
        className={style.input}
      />
      <Button
        onClick={() => (action.current = "deposit")}
        type="submit"
        variant="outlined"
        className={style.btn}
        style={{ marginTop: "15px", marginBottom: "5px" }}
      >
        Deposit
      </Button>
      <Button
        onClick={() => (action.current = "withdraw")}
        type="submit"
        variant="outlined"
        className={style.btn}
      >
        Withdraw
      </Button>
    </form>
  );
};
