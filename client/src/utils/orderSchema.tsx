import * as yup from "yup";

export const orderSchema = yup.object({
  Klient: yup.string().required("To pole jest wymagane"),
  Ilosc: yup
    .string()
    .min(1, "Ilość musi być większa od 0")
    .max(15, "Ilość nie może przekroczyć 15")
    .required("To pole jest wymagane"),
  Tytul: yup.string().min(5, "Tytuł musi mieć minimum 5 liter").required("To pole jest wymagane"),
  Opis: yup.string().min(10, "Opis musi mieć minimum 10 liter").required("To pole jest wymagane"),
});
