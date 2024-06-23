

export interface IListToday {
  label: string;
  isCheck: boolean;
}

export interface IListSelectedDay {
  id: string;
  list: IListToday[];
}

export type TText = string | number

