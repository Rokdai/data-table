export interface ITable {
  tableId: string;
  itemsList: IItemList[];
}

export interface IItemList {
  id: string;
  name: string;
  surname: string;
  age: string;
  city: string;
}
