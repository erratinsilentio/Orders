import * as yup from "yup";
export const addClientValidationSchema = yup.object({
    imie: yup
        .string()
        .min(3, "Imie musi mieć minimum 3 litery")
        .required("Imie jest wymagane"),
    nazwisko: yup
        .string()
        .min(3, "Nazwisko musi mieć minimum 3 litery")
        .required("Nazwisko jest wymagane"),
    ulica: yup
        .string()
        .min(5, "Ulica musi mieć minimum 5 liter")
        .required("Ulica jest wymagana"),
    kod: yup
        .string()
        .required("Nazwisko jest wymagane")
        .matches(/^\d{2}-\d{3}$/, "Niepoprawny format kodu pocztowego"),
    miasto: yup
        .string()
        .min(3, "Miasto musi mieć minimum 3 litery")
        .required("Miasto jest wymagane"),
    region: yup.string().min(3, "Region musi mieć minimum 3 litery"),
    zdjecie: yup.string(),
    telefon: yup
        .string()
        .required("Telefon jest wymagany")
        .matches(/^\+\d{11}$/, "Niepoprawny format numeru telefonu"),
});
