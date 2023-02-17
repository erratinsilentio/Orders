import * as yup from "yup";
export const moneyValidationSchema = yup.object({
    amount: yup.number().required("Musisz podać kwotę"),
});
