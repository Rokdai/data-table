import { Formik } from "formik";
import { Form } from "../Form";
import { Layout } from "../Layout";
import { FORM_VALIDATION_SCHEMA } from "../../constants/FORM_VALIDATION_SCHEMA";

import styles from "./MainPage.module.scss";
import useLocalStorageState from "use-local-storage-state";
import { ITable } from "../../types/table";
import { setTableRow } from "../../utils/tableActions";
import { CustomTable } from "../CustomTable";

export const MainPage = () => {
  const [tablesList, setTablesList] = useLocalStorageState<ITable[]>(
    "tablesList",
    {
      defaultValue: [
        {
          tableId: "1",
          itemsList: [],
        },
      ],
    }
  );

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.formWrapper}>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              age: "",
              city: "",
            }}
            validationSchema={FORM_VALIDATION_SCHEMA}
            onSubmit={(data, { resetForm }) => {
              setTableRow(data, "1", tablesList, setTablesList);
              resetForm();
            }}
          >
            <>
              <Form />
              <Form />
            </>
          </Formik>
        </div>
        <div className={styles.tablesListWrapper}>
          {tablesList &&
            tablesList.map((item) => {
              return (
                <CustomTable
                  tableID={item.tableId}
                  rowsList={item.itemsList}
                  isShowDeletaTableBtn={item.tableId !== "1"}
                  key={item.tableId}
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
};
