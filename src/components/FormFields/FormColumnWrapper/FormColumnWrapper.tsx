import { FC, ReactNode } from "react";

import styles from "./FormColumnWrapper.module.scss";

interface IProps {
  children: ReactNode;
  gap?: number;
}

export const FormColumnWrapper: FC<IProps> = ({ children, gap }) => {
  return (
    <div className={styles.root} style={{ gap: gap }}>
      {children}
    </div>
  );
};
