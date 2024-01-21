"use client";
import styles from "./index.module.scss";

interface HeaderSortButton {
  // For attaching sort onClick event to header cell
  label: string;
  onClick: () => void;
}
interface CellButton {
  // For attaching onClick event to cell
  label: string;
  onClick: () => void;
}
interface Props {
  items: Record<string, string | CellButton | CellButton[]>[];
  headers: (string | HeaderSortButton)[];
  colWidths?: number[];
}
/**
 * Standard table.
 *
 * @param {Record<string, string | CellButton | CellButton[]>[]} props.items - Items displayed in table body. Must be same array length as props.headers
 * @param {string[]} props.headers - Headers. Must be same array length as props.items
 * @param {number[]} props.colWidths - Width fraction occupied by each column. Must be same array length as props.items and props.headers
 */
export default function Table(props: Props) {
  const { items, headers, colWidths = null } = props;
  return (
    <main className={styles.table}>
      <section className={styles.headerSection}>
        {headers.map((header, index) => {
          const flexStyle = {
            flexGrow: colWidths ? colWidths[index] : 1,
            flexShrink: colWidths ? 1 / colWidths[index] : 1,
            flexBasis: 10,
          };
          if (typeof header === "string") {
            return (
              <CellHeader key={index} style={flexStyle}>
                {header}
              </CellHeader>
            );
          } else {
            return (
              <CellHeader
                key={index}
                style={flexStyle}
                onClick={() => header.onClick()}
              >
                {header.label}
              </CellHeader>
            );
          }
        })}
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
                const flexStyle = {
                  flexGrow: colWidths ? colWidths[index] : 1,
                  flexShrink: colWidths ? 1 / colWidths[index] : 1,
                  flexBasis: 10,
                };
                const cellItem = item[key];
                if (typeof cellItem === "string") {
                  return (
                    <CellUser key={index} style={flexStyle}>
                      {cellItem}
                    </CellUser>
                  );
                } else if (Array.isArray(cellItem)) {
                  return (
                    <CellUser key={index} style={flexStyle}>
                      {cellItem.map((item, index) => {
                        return (
                          <ButtonText key={key} onClick={() => item.onClick()}>
                            {item.label}
                          </ButtonText>
                        );
                      })}
                    </CellUser>
                  );
                } else {
                  return (
                    <CellUser key={index} style={flexStyle}>
                      <ButtonText key={key} onClick={() => cellItem.onClick()}>
                        {cellItem.label}
                      </ButtonText>
                    </CellUser>
                  );
                }
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
  style?: React.CSSProperties;
  onClick?: () => void;
}
function CellHeader({ children, style, onClick }: CellProps) {
  return (
    <div
      className={styles.cell + " " + styles.headerCell}
      style={style ? style : {}}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {children}
    </div>
  );
}
function CellUser({ children, style }: CellProps) {
  return (
    <div
      className={styles.cell + " " + styles.userCell}
      style={style ? style : {}}
    >
      {children}
    </div>
  );
}

interface ButtonTextProps {
  children: React.ReactNode;
  onClick: () => void;
}
function ButtonText({ children, onClick }: ButtonTextProps) {
  return (
    <div className={styles.buttonText} onClick={() => onClick()}>
      {children}
    </div>
  );
}
