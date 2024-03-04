export const VALIDATION_MESSAGES = {
  onlyLetters: "The field must contain only Latin letters",
  onlyNumbers: "This field must contain only numbers",
  uppercaseLetter: "The line must begin with a capital letter",
  withoutSpaces: "The string must not contain spaces",
  requiredField: "This field is required",
  fieldMaxLength: (value: string | number) =>
    `The maximum value of this field is ${value} characters`,
};
