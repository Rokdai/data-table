import Select, { SingleValue } from "react-select";
import { IOptions } from "./types";
import { FC, ReactNode } from "react";
import { setCustomStyles } from "./customStyles";

import styles from "./CustomSelect.module.scss";
import classNames from "classnames";

interface IProps {
  options: IOptions[];
  name: string;
  value: string;
  placeholder?: string;
  message?: ReactNode | string;
  isError?: boolean;
  onChange?: (
    selectedValue: SingleValue<{
      value: string;
      label: string;
    }>
  ) => void;
}

export const CustomSelect: FC<IProps> = ({
  options,
  name,
  value,
  placeholder,
  message,
  isError,
  onChange,
}) => {
  return (
    <div className={styles.root}>
      <Select
        options={options}
        name={name}
        value={value.length ? { value: value, label: value } : undefined}
        placeholder={placeholder}
        styles={setCustomStyles(isError)}
        onChange={onChange}
      />
      {message && (
        <div
          className={classNames(styles.messageWrapper, {
            [styles.messageWrapperError]: isError,
          })}
        >
          {message}
        </div>
      )}
    </div>
  );
};
