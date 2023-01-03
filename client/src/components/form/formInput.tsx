import TextField from "@mui/material/TextField";
import { FormikProps } from "formik";

export function FormInput<T>({
  formik,
  accessor,
}: {
  formik: FormikProps<T>;
  accessor: Exclude<keyof T, symbol>;
}) {
  return (
    <div>
      <TextField
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
      />
    </div>
  );
}
