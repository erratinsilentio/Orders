import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useThemeContext } from "../../utils/ThemeContext";
export const FormSelect = ({ accessor, formik, data }) => {
    const { theme } = useThemeContext();
    return (_jsx(Box, { sx: { minWidth: 120 }, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { sx: {
                        color: `${theme === "dark" ? "var(--primary)" : "var(--font)"}`,
                    }, children: accessor }), _jsx(Select, { sx: { border: "1px solid var(--primary)" }, error: Boolean(formik.touched[accessor] && formik.errors[accessor]), id: accessor, label: accessor, name: accessor, onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values[accessor], children: data.map((client) => (_jsx(MenuItem, { value: client.telefon, children: client.telefon }, client.telefon))) })] }) }));
};
