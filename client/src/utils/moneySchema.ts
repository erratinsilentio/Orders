import * as yup from "yup";
import { InferType } from "yup";

export const moneyValidationSchema = yup.object({
  amount: yup.number().required("Musisz podać kwotę"),
});

export type moneyForm = InferType<typeof moneyValidationSchema>;
