import { Formik } from "formik";
import { Form } from "../Form";
import { Layout } from "../Layout";
import { FORM_VALIDATION_SCHEMA } from "../../constants/FORM_VALIDATION_SCHEMA";

import styles from "./MainPage.module.scss";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";
import { ITable } from "../../types/table";
import { setItem } from "../../utils/setItem";
import { CustomTable } from "../CustomTable";

export const MainPage = () => {
  const [tablesList, setTablesList] = useLocalStorageState<ITable[]>(
    "tablesList",
    {
      defaultValue: [
        {
          tableId: "1",
          itemsList: [
            {
              id: nanoid(),
              name: "Tast",
              surname: "Tastsur",
              age: "22",
              city: "Ventspils",
            },
          ],
        },
      ],
    }
  );

  return (
    <Layout>
      <>
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
              setItem(data, "1", tablesList, setTablesList);
              resetForm();
            }}
          >
            <>
              <Form />
              <Form />
            </>
          </Formik>
        </div>
        <div>
          <CustomTable />
        </div>
      </>
    </Layout>
  );
};
