import { SORT_ORDER } from "@/config/types";

export interface HeaderSortButton {
  // For attaching sort onClick event to header cell
  label: string;
  onClick: (sortOrder: SORT_ORDER) => void;
}
export interface CellButton {
  // For attaching onClick event to cell
  label: string;
  onClick: () => void;
  isTextButton?: boolean;
}
export interface CellProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}
export interface RowConfig {
  rowIndex: number;
  isHighlighted?: boolean
}
export interface TableConfig {
  uniformRowColor?: boolean;
}