import * as yup from "yup";
import { InferType } from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const loginValidationSchema = yup.object({
  login: yup.string().min(6, "Login jest za krótki").required("Musisz podać login"),
  password: yup.string().min(6, "Hasło jest za krótkie").required("Musisz podać hasło"),
});

export type loginForm = InferType<typeof loginValidationSchema>;

export const registerValidationSchema = yup.object({
  email: yup.string().email().required("Musisz podać adres e-mail"),
  login: yup.string().min(6, "Login jest za krótki").required("Musisz podać login"),
  password: yup
    .string()
    .min(6, "Hasło musi mieć minimum 6 znaków")
    .max(20, "Hasło musi mieć mniej niż 20 znaków")
    .password()
    .required("Musisz podać hasło")
    .minUppercase(1, "password must contain at least 1 upper case letter")
    .minNumbers(1, "password must contain at least 1 number"),
});

export type registerForm = InferType<typeof registerValidationSchema>;
