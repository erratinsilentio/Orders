import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Client } from "../../data";
import { FormikProps } from "formik";
import { useThemeContext } from "../../utils/ThemeContext";

type Props = {
  accessor: string;
  formik: FormikProps<any>;
  data: Client[];
};

export const FormSelect: React.FC<Props> = ({ accessor, formik, data }) => {
  const { theme } = useThemeContext();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: `${theme === "dark" ? "var(--primary)" : "var(--font)"}` }}>
          {accessor}
        </InputLabel>
        <Select
          sx={{ border: "1px solid var(--primary)" }}
          error={Boolean(formik.touched[accessor] && formik.errors[accessor])}
          id={accessor}
          label={accessor}
          name={accessor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[accessor]}
        >
          {data.map((client) => (
            <MenuItem key={client.telefon} value={client.telefon}>
              {client.telefon}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
