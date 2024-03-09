import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";

import { animation } from "./constants";
import styles from "./ReactPortalSubstrate.module.scss";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const ReactPortalSubstrate: FC<IProps> = ({ children, className }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className={classNames(styles.root, className)}
      variants={animation}
      onClick={onClick}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
