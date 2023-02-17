import { jsx as _jsx } from "react/jsx-runtime";
import TextField from "@mui/material/TextField";
import { useThemeContext } from "../../utils/ThemeContext";
export function FormInput({ formik, accessor, }) {
    const { theme } = useThemeContext();
    return (_jsx("div", { children: _jsx(TextField, { sx: {
                input: { color: "var(--font)" },
                label: {
                    color: `${theme === "dark" ? "var(--primary)" : "var(--font)"}`,
                },
            }, style: {
                width: "300px",
                border: "1px solid var(--primary)",
                borderRadius: "5px",
            }, error: Boolean(formik.touched[accessor] && formik.errors[accessor]), helperText: formik.touched[accessor] && formik.errors[accessor]
                ? formik.errors[accessor]
                : null, id: accessor.toString(), label: accessor, name: accessor.toString(), onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values[accessor], type: accessor === "password" ? "password" : "text" }) }));
}
