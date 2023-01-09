import * as yup from "yup";
import { InferType } from "yup";

export const orderSchema = yup.object({
  telefon: yup.string().required("To pole jest wymagane"),
  ilosc: yup
    .string()
    .min(1, "Ilość musi być większa od 0")
    .max(15, "Ilość nie może przekroczyć 15")
    .required("To pole jest wymagane"),
  tytul: yup
    .string()
    .min(5, "Tytuł musi mieć minimum 5 liter")
    .required("To pole jest wymagane"),
  opis: yup
    .string()
    .min(10, "Opis musi mieć minimum 10 liter")
    .required("To pole jest wymagane"),
});

export type AddOrderForm = InferType<typeof orderSchema>;
