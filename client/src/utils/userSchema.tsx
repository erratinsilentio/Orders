import * as yup from "yup";
import { InferType } from "yup";

export const loginValidationSchema = yup.object({
  login: yup.string().min(6, "Login jest za krótki").required("Musisz podać login"),
  password: yup.string().min(6, "Hasło jest za krótkie").required("Musisz podać hasło"),
});

export type loginForm = InferType<typeof loginValidationSchema>;
