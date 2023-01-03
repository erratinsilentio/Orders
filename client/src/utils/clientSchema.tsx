import * as yup from "yup";

export const yupSchema = yup.object({
  Imie: yup.string().min(3, "Imie musi mieć minimum 3 litery").required("Imie jest wymagane"),
  Nazwiko: yup
    .string()
    .min(3, "Nazwisko musi mieć minimum 3 litery")
    .required("Nazwisko jest wymagane"),
  Ulica: yup.string().min(5, "Ulica musi mieć minimum 5 liter").required("Ulica jest wymagana"),
  Kod: yup
    .string()
    .required("Nazwisko jest wymagane")
    .matches(/^\d{2}-\d{3}$/, "Niepoprawny format kodu pocztowego"),
  Miasto: yup.string().min(3, "Miasto musi mieć minimum 3 litery").required("Miasto jest wymagane"),
  Region: yup.string().min(3, "Region musi mieć minimum 3 litery"),
  Zdjecie: yup.string(),
  Tel: yup
    .string()
    .required("Telefon jest wymagany")
    .matches(/^\+\d{11}$/, "Niepoprawny format numeru telefonu"),
});
