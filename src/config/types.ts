export interface ListItem {
  label: string;
  value: string;
}
export interface SimpleStaff {
  approverGroup?: string;
  department?: string;
  email: string;
  name: string;
  userId: string;
  role?: string;
}

export enum SORT_ORDER {
  ASC = "ASC",
  DESC = "DESC",
  DEFAULT = "DEFAULT"
}