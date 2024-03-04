import { FC, ReactNode } from "react";

import styles from "./Layout.module.scss";

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};
