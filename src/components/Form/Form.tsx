import { FormikContextType, useFormikContext } from "formik";
import { SELECT_OPTIONS } from "../../constants/SELECT_OPTIONS";
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../FormFields/CustomInput";
import { CustomSelect } from "../FormFields/CustomSelect";
import { FormColumnWrapper } from "../FormFields/FormColumnWrapper";
import styles from "./Form.module.scss";
import { IForm } from "../../types/form";
import { SingleValue } from "react-select";

export const Form = () => {
  const formik: FormikContextType<IForm> = useFormikContext();

  const onSelectValue = (
    selectedValue: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    formik.setFieldValue("city", selectedValue?.value);
  };

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <FormColumnWrapper>
        <CustomInput
          name="name"
          value={formik.values.name}
          placeholder="Name"
          isError={!!formik.errors.name}
          message={formik.errors.name}
          onChange={formik.handleChange}
        />
        <CustomInput
          name="surname"
          value={formik.values.surname}
          placeholder="Surname"
          isError={!!formik.errors.surname}
          message={formik.errors.surname}
          onChange={formik.handleChange}
        />
        <CustomInput
          name="age"
          value={formik.values.age}
          placeholder="Age"
          isError={!!formik.errors.age}
          message={formik.errors.age}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={SELECT_OPTIONS}
          name="city"
          value={formik.values.city}
          placeholder="City"
          isError={!!formik.errors.city}
          message={formik.errors.city}
          onChange={onSelectValue}
        />
      </FormColumnWrapper>
      <CustomButton
        type="submit"
        buttonContent={"ADD"}
        isDisabled={
          !Object.values(formik.values).some((value) => value.length > 0) ||
          !formik.isValid
        }
      />
    </form>
  );
};
