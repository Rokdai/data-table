import { FC, ReactNode } from "react";

import styles from "./CustomButton.module.scss";
import classNames from "classnames";

interface IProps {
  children: ReactNode | string;
  type?: "button" | "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
  theme?: "edit" | "delete" | "nonGreasy" | "unstyled";
  onClick?: () => void;
}

export const CustomButton: FC<IProps> = ({
  children,
  type = "button",
  className,
  isDisabled,
  theme,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={classNames(styles.root, className, {
        [styles[theme || ""]]: theme,
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
