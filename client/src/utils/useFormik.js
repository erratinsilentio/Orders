import { useFormik } from "formik";
import { addClientValidationSchema } from "./clientSchema";
import { loginValidationSchema, registerValidationSchema } from "./userSchema";
import { orderSchema } from "./orderSchema";
import { moneyValidationSchema } from "./moneySchema";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "../store/moneySlice";
import { useNotificationContext } from "./NotificationContext";
export const addClientFormik = (mutation) => {
    const formik = useFormik({
        initialValues: {
            imie: "",
            nazwisko: "",
            ulica: "",
            kod: "",
            miasto: "",
            region: "",
            zdjecie: "",
            telefon: "",
        },
        validationSchema: addClientValidationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            mutation.mutate(values);
        },
    });
    return formik;
};
export const updateClientFormik = (client, mutation) => {
    const formik = useFormik({
        initialValues: {
            imie: client.imie || "",
            nazwisko: client.nazwisko || "",
            ulica: client.ulica || "",
            kod: client.kod || "",
            miasto: client.miasto || "",
            region: client.region || "",
            zdjecie: client.zdjecie || "",
            telefon: client.telefon || "",
        },
        validationSchema: addClientValidationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            mutation.mutate(values);
        },
    });
    return formik;
};
export const loginActionFormik = (logIn) => {
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            logIn(values);
        },
    });
    return formik;
};
export const registerActionFormik = (addUser) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            login: "",
            password: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
            addUser(values);
        },
    });
    return formik;
};
export const addOrderFormik = (mutation) => {
    const formik = useFormik({
        initialValues: {
            telefon: "",
            tytul: "",
            opis: "",
            ilosc: "",
            kwota: 0,
        },
        validationSchema: orderSchema,
        onSubmit: (values) => {
            mutation.mutate(values);
        },
    });
    return formik;
};
export const moneyFormik = (action) => {
    const dispatch = useDispatch();
    const { setSuccess, setError } = useNotificationContext();
    const formik = useFormik({
        initialValues: {
            amount: 0,
        },
        validationSchema: moneyValidationSchema,
        onSubmit: (values) => {
            try {
                action === "withdraw"
                    ? dispatch(withdraw(Number(values.amount)))
                    : dispatch(deposit(Number(values.amount)));
                setSuccess();
            }
            catch {
                setError();
            }
        },
    });
    return formik;
};
