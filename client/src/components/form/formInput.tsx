import TextField from "@mui/material/TextField";
import { color } from "@mui/system";
import { FormikProps } from "formik";
import { useThemeContext } from "../../utils/ThemeContext";

export function FormInput<T>({
  formik,
  accessor,
}: {
  formik: FormikProps<T>;
  accessor: Exclude<keyof T, symbol>;
}) {
  const { theme } = useThemeContext();
  return (
    <div>
      <TextField
        sx={{
          input: { color: "var(--font)" },
          label: {
            color: `${theme === "dark" ? "var(--primary)" : "var(--font)"}`,
          },
        }}
        style={{
          width: "300px",
          border: "1px solid var(--primary)",
          borderRadius: "5px",
        }}
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
