import { FC, useRef, useState } from "react";
import { IItemList, ITable } from "../../types/table";
import { CustomButton } from "../CustomButton";
import { ReactComponent as DeleteIcon } from "../../assets/icons/crossIcon.svg";

import styles from "./CustomTable.module.scss";
import useLocalStorageState from "use-local-storage-state";
import {
  copyTable,
  deleteTable,
  deleteTableRow,
} from "../../utils/tableActions";
import { ReactPortal } from "../ReactPortal";
import { ReactPortalSubstrate } from "../ReactPortalSubstrate/ReactPortalSubstrate";
import { PortalForm } from "../PortalForm";
import { useClickOutside } from "../../hooks/useClickOutside";

interface IProps {
  tableID: string;
  rowsList: IItemList[];
  isShowDeletaTableBtn?: boolean;
}

export const CustomTable: FC<IProps> = ({
  tableID,
  rowsList,
  isShowDeletaTableBtn = true,
}) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [activeRow, setActiveRow] = useState<IItemList | null>(null);

  const [tableList, setTablesList] =
    useLocalStorageState<ITable[]>("tablesList");

  const formRef = useRef<HTMLDivElement>(null);

  const onCopyTable = () => {
    if (tableList) {
      copyTable(tableID, tableList, setTablesList);
    }
  };

  const onDeleteClick = () => {
    if (tableList) {
      deleteTable(tableID, tableList, setTablesList);
    }
  };

  const onDeleteRowClick = (id: string) => {
    if (tableList) {
      deleteTableRow(tableID, id, tableList, setTablesList);
    }
  };

  const onEditFormOpen = (row: IItemList) => {
    setActiveRow(row);
    setIsEditFormOpen(true);
  };

  const onEditFormClose = () => {
    setIsEditFormOpen(false);
  };

  useClickOutside(formRef, onEditFormClose);

  return (
    <div className={styles.root}>
      <div className={styles.topBtnsWrapper}>
        <CustomButton
          theme="nonGreasy"
          className={styles.copyBtn}
          onClick={onCopyTable}
        >
          Copy table
        </CustomButton>
        {isShowDeletaTableBtn && (
          <CustomButton theme="unstyled" onClick={onDeleteClick}>
            <DeleteIcon />
          </CustomButton>
        )}
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.theadRow}>
              <th className={styles.theadItem}>Name</th>
              <th className={styles.theadItem}>Surname</th>
              <th className={styles.theadItem}>Age</th>
              <th className={styles.theadItem}>City</th>
              <th className={styles.theadItem}></th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {rowsList.map((item) => (
              <tr className={styles.tbodyRow} key={item.id}>
                <td className={styles.tbodyItem}>{item.name}</td>
                <td className={styles.tbodyItem}>{item.surname}</td>
                <td className={styles.tbodyItem}>{item.age}</td>
                <td className={styles.tbodyItem}>{item.city}</td>
                <td className={styles.tbodyItem}>
                  <div className={styles.btnWrapper}>
                    <CustomButton
                      theme="edit"
                      onClick={() => onEditFormOpen(item)}
                    >
                      Edit
                    </CustomButton>
                    <CustomButton
                      theme="delete"
                      onClick={() => onDeleteRowClick(item.id)}
                    >
                      Delete
                    </CustomButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditFormOpen && activeRow && (
        <ReactPortal>
          <ReactPortalSubstrate className={styles.potalSubstrate}>
            <PortalForm
              tableID={tableID}
              ref={formRef}
              row={activeRow}
              onClose={onEditFormClose}
            />
          </ReactPortalSubstrate>
        </ReactPortal>
      )}
    </div>
  );
};
