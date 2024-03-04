import * as yup from "yup";
import { VALIDATION_MESSAGES } from "./VALIDATION_MESSAGES";

export const FORM_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .matches(/^\S+$/, VALIDATION_MESSAGES.withoutSpaces)
    .matches(/^[A-Z][a-zA-Z]*$/, VALIDATION_MESSAGES.uppercaseLetter)
    .matches(/^[A-Za-z]+$/, VALIDATION_MESSAGES.onlyLetters)
    .max(12, VALIDATION_MESSAGES.fieldMaxLength(12))
    .required(VALIDATION_MESSAGES.requiredField),
  surname: yup
    .string()
    .matches(/^\S+$/, VALIDATION_MESSAGES.withoutSpaces)
    .matches(/^[A-Z][a-zA-Z]*$/, VALIDATION_MESSAGES.uppercaseLetter)
    .matches(/^[A-Za-z]+$/, VALIDATION_MESSAGES.onlyLetters)
    .max(12, VALIDATION_MESSAGES.fieldMaxLength(12))
    .required(VALIDATION_MESSAGES.requiredField),
  age: yup
    .string()
    .max(3, VALIDATION_MESSAGES.fieldMaxLength(3))
    .matches(/^\d+$/, VALIDATION_MESSAGES.onlyNumbers)
    .required(VALIDATION_MESSAGES.requiredField),
  city: yup.string().required(VALIDATION_MESSAGES.requiredField),
});
