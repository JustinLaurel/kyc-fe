import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";

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

export interface ButtonSpecs {
  label: string;
  onClick?: () => void;
  colorScheme?: BUTTON_COLOR_SCHEMES;
  isSubmit?: boolean;
}

export interface NoProps {}