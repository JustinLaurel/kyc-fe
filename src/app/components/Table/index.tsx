"use client";
import styles from "./index.module.scss";

interface Props {
  items: Record<string, string>[];
  headers: string[];
  colWidths?: (number | null)[];
}
/**
 * Standard table.
 *
 * @param {Record<string, string>[]} props.items - Items displayed in table body. Must be same array length as props.headers
 * @param {string[]} props.headers - Headers. Must be same array length as props.items
 * @param {number[]} props.colWidths - Width of each column. null width columns will occupy remaining space. Must be same array length as props.items/props.headers
 */
export default function Table(props: Props) {
  const { items, headers } = props;
  return (
    <main className={styles.table}>
      <section className={styles.headerSection}>
        {headers.map((header, index) => (
          <CellHeader key={index}>{header}</CellHeader>
        ))}
      </section>
      <section className={styles.usersSection}>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={
                styles.row + (index % 2 === 0 ? " " + styles.even : "")
              }
            >
              {Object.keys(item).map((key, index) => {
                return <CellUser key={index}>{item[key]}</CellUser>;
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
}

interface CellProps {
  children: React.ReactNode;
}
function CellHeader({ children }: CellProps) {
  return (
    <div className={styles.cell + " " + styles.headerCell}>{children}</div>
  );
}
function CellUser({ children }: CellProps) {
  return <div className={styles.cell + " " + styles.userCell}>{children}</div>;
}
