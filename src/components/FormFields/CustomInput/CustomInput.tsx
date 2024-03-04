import classNames from "classnames";
import styles from "./CustomInput.module.scss";
import { ChangeEvent, FC, ReactNode } from "react";

interface IProps {
  name: string;
  value: string;
  id?: string;
  type?: "text";
  placeholder?: string;
  message?: ReactNode | string;
  isError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<IProps> = ({
  name,
  value,
  id = name,
  type = "text",
  placeholder,
  message,
  isError,
  onChange,
}) => {
  return (
    <div className={classNames(styles.root)}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={classNames(styles.input, { [styles.error]: isError })}
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
