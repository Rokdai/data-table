import { nanoid } from "nanoid";
import { IForm } from "../types/form";
import { ITable } from "../types/table";

export const copyTable = (
  id: string,
  tablesList: ITable[],
  setTablesList: React.Dispatch<React.SetStateAction<ITable[] | undefined>>
) => {
  const targetItem = tablesList.find((item) => item.tableId === id);
  const targetItemIndex = tablesList.findIndex((item) => item.tableId === id);

  if (targetItem) {
    const newList = [
      ...tablesList.slice(0, targetItemIndex + 1),
      { ...targetItem, tableId: nanoid() },
      ...tablesList.slice(targetItemIndex + 1),
    ];

    setTablesList(newList);
  }
};

export const deleteTable = (
  tableId: string,
  tablesList: ITable[],
  setTablesList: React.Dispatch<React.SetStateAction<ITable[] | undefined>>
) => {
  setTablesList(tablesList.filter((item) => item.tableId !== tableId));
};

export const setTableRow = (
  data: IForm,
  id: string,
  tablesList: ITable[],
  setTablesList: (value: React.SetStateAction<ITable[]>) => void
) => {
  const newItem = {
    id: nanoid(),
    name: data.name,
    surname: data.surname,
    age: data.age,
    city: data.city,
  };

  setTablesList(
    tablesList.map((item) => {
      if (item.tableId === id) {
        item.itemsList.push(newItem);
      }

      return item;
    })
  );
};

export const editTableRow = (
  data: IForm,
  tableId: string,
  rowId: string,
  tablesList: ITable[],
  setTablesList: React.Dispatch<React.SetStateAction<ITable[] | undefined>>
) => {
  setTablesList(
    tablesList.map((table) => {
      if (table.tableId === tableId) {
        table.itemsList = table.itemsList.map((item) => {
          if (item.id === rowId) {
            return {
              ...item,
              name: data.name,
              surname: data.surname,
              age: data.age,
              city: data.city,
            };
          }

          return item;
        });
      }

      return table;
    })
  );
};

export const deleteTableRow = (
  tableId: string,
  rowId: string,
  tablesList: ITable[],
  setTablesList: React.Dispatch<React.SetStateAction<ITable[] | undefined>>
) => {
  let isTableDelete = false;

  const newTableList = tablesList.map((table) => {
    if (table.tableId === tableId) {
      table.itemsList = table.itemsList.filter((item) => item.id !== rowId);

      if (!table.itemsList.length) {
        isTableDelete = true;
      }
    }

    return table;
  });

  if (!isTableDelete) {
    setTablesList(newTableList);
  } else if (isTableDelete && tableId === "1") {
    setTablesList(newTableList);
  } else {
    deleteTable(tableId, tablesList, setTablesList);
  }
};
