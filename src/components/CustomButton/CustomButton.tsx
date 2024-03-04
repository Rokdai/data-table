import { FC, ReactNode } from "react";

import styles from "./CustomButton.module.scss";
import classNames from "classnames";

interface IProps {
  buttonContent: ReactNode | string;
  type?: "button" | "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const CustomButton: FC<IProps> = ({
  buttonContent,
  type = "button",
  className,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={classNames(styles.root, className)}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonContent}
    </button>
  );
};
