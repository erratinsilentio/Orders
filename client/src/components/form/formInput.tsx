import TextField from "@mui/material/TextField";
import { FormikProps } from "formik";
import style from "./formInput.styles.css";

export function FormInput<T>({
  formik,
  accessor,
}: {
  formik: FormikProps<T>;
  accessor: Exclude<keyof T, symbol>;
}) {
  console.log(accessor);
  return (
    <div>
      <TextField
        style={{ width: "300px" }}
        error={Boolean(formik.touched[accessor] && formik.errors[accessor])}
        helperText={
          formik.touched[accessor] && formik.errors[accessor]
            ? (formik.errors[accessor] as string)
            : null
        }
        id={accessor.toString()}
        label={accessor}
        name={accessor.toString()}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[accessor]}
        type={accessor === "password" ? "password" : "text"}
      />
    </div>
  );
}
