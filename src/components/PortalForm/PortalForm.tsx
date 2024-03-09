import { Formik } from "formik";
import { FORM_VALIDATION_SCHEMA } from "../../constants/FORM_VALIDATION_SCHEMA";
import { Form } from "../Form";
import { ReactComponent as CloseIcon } from "../../assets/icons/crossIcon.svg";

import styles from "./PortalForm.module.scss";
import { CustomButton } from "../CustomButton";
import { forwardRef } from "react";
import useLocalStorageState from "use-local-storage-state";
import { IItemList, ITable } from "../../types/table";
import { editTableRow } from "../../utils/tableActions";

interface IProps {
  tableID: string;
  row: IItemList;
  onClose: () => void;
}

export const PortalForm = forwardRef<HTMLDivElement, IProps>(
  ({ tableID, row, onClose }: IProps, ref) => {
    const [tableList, setTablesList] =
      useLocalStorageState<ITable[]>("tablesList");

    return (
      <div className={styles.root} ref={ref}>
        <CustomButton
          theme="unstyled"
          className={styles.closeBtn}
          onClick={onClose}
        >
          <CloseIcon />
        </CustomButton>
        <Formik
          initialValues={{
            name: row.name,
            surname: row.surname,
            age: row.age,
            city: row.city,
          }}
          validationSchema={FORM_VALIDATION_SCHEMA}
          onSubmit={(data) => {
            if (tableList) {
              editTableRow(data, tableID, row.id, tableList, setTablesList);
              onClose();
            }
          }}
        >
          <Form className={styles.form} submitBtnText="AGREE" />
        </Formik>
      </div>
    );
  }
);
