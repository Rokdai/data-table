import { nanoid } from "nanoid";
import { IForm } from "../types/form";
import { ITable } from "../types/table";

export const setItem = (
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
      if (item.tableId == id) {
        item.itemsList.push(newItem);
      }

      return item;
    })
  );
};
