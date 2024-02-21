"use client";
import { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import TextButton from "../TextButton";
import ActionButton from "../ActionButton";
import { Button } from "@mui/material";
import { SORT_ORDER } from "@/config/types";

interface HeaderSortButton {
  // For attaching sort onClick event to header cell
  label: string;
  onClick: (sortOrder: SORT_ORDER) => void;
}
interface CellButton {
  // For attaching onClick event to cell
  label: string;
  onClick: () => void;
  isTextButton?: boolean;
}
interface Props {
  items: Record<string, string | CellButton | CellButton[]>[];
  headers: (string | HeaderSortButton)[];
  colWidths?: number[];
}
/**
 * Standard table.
 *
 * @param {Record<string, string | CellButton | CellButton[]>[]} props.items - Items displayed in table body. items.length === headers.length MUST be true
 * @param {string[]} props.headers - Headers. headers.length === items.length MUST be true
 * @param {number[]} props.colWidths - Width fraction occupied by each column. colWidths.length === headers.length === items.length MUST be true
 */
export default function DataTable(props: Props) {
  const { items, headers, colWidths = null } = props;
  const [sortOrders, setSortOrders] = useState<
    Record<string, SORT_ORDER>
  >({});

  function sortOrderToggler(
    currentOrder: SORT_ORDER
  ) {
    switch (currentOrder) {
      case SORT_ORDER.DEFAULT:
        return SORT_ORDER.DESC;
      case SORT_ORDER.DESC:
        return SORT_ORDER.ASC;
      case SORT_ORDER.ASC:
        return SORT_ORDER.DEFAULT;
      default:
        return SORT_ORDER.DEFAULT;
    }
  }

  function handleHeaderSort(header: HeaderSortButton) {
    const currentSortOrder = sortOrders[header.label] ?? SORT_ORDER.DEFAULT;
    const newSortOrder = sortOrderToggler(currentSortOrder);
    if (newSortOrder === SORT_ORDER.DEFAULT) {
      setSortOrders({});
    } else {
      setSortOrders({
        [header.label]: newSortOrder,
      })
    }
    header.onClick(newSortOrder);
  }

  return (
    <main className={styles.table}>
      <section className={styles.content}>
        <section className={styles.headerSection}>
          {headers.map((header, index) => {
            const flexStyle = {
              flexGrow: colWidths ? colWidths[index] : 1,
              flexShrink: colWidths ? 1 / colWidths[index] : 1,
              flexBasis: 10,
            };
            if (typeof header === "string") {
              return (
                <HeaderCell key={index} style={flexStyle}>
                  {header}
                </HeaderCell>
              );
            } else {
              return (
                <HeaderCell
                  key={index}
                  style={{ ...flexStyle, cursor: "pointer" }}
                  onClick={() => handleHeaderSort(header)}
                >
                  <div className={styles.title}>{header.label}</div>
                  {sortOrders[header.label] === SORT_ORDER.ASC ? (
                    <IconSortUp />
                  ) : sortOrders[header.label] === SORT_ORDER.DESC ? (
                    <IconSortDown />
                  ) : (
                    <IconSort />
                  )}
                </HeaderCell>
              );
            }
          })}
        </section>
        <section className={styles.usersSection}>
          {items.map((item, rowIndex) => {
            return (
              <div
                key={rowIndex}
                className={
                  styles.row + (rowIndex % 2 === 0 ? " " + styles.even : "")
                }
              >
                {Object.keys(item).map((key, cellIndex) => {
                  const flexStyle = {
                    flexGrow: colWidths ? colWidths[cellIndex] : 1,
                    flexShrink: colWidths ? 1 / colWidths[cellIndex] : 1,
                    flexBasis: 10,
                  };
                  const cellItem = item[key];
                  if (
                    !cellItem ||
                    typeof cellItem === "string" ||
                    typeof cellItem === "number"
                  ) {
                    return (
                      <Cell key={cellIndex} style={flexStyle}>
                        {cellItem}
                      </Cell>
                    );
                  } else if (Array.isArray(cellItem)) {
                    return (
                      <Cell key={cellIndex} style={flexStyle}>
                        {cellItem.map((item, index) => {
                          return item.isTextButton ? (
                            <TextButton
                              key={index}
                              onClick={() => item.onClick()}
                              className={styles.cellTextButton}
                            >
                              {item.label}
                            </TextButton>
                          ) : (
                            <ActionButton
                              key={index}
                              onClick={() => item.onClick()}
                              className={styles.cellButton}
                            >
                              {item.label}
                            </ActionButton>
                          );
                        })}
                      </Cell>
                    );
                  } else {
                    return (
                      <Cell key={cellIndex} style={flexStyle}>
                        {cellItem.isTextButton ? (
                          <TextButton
                            onClick={() => cellItem.onClick()}
                            className={styles.cellTextButton}
                          >
                            {cellItem.label}
                          </TextButton>
                        ) : (
                          <ActionButton
                            onClick={() => cellItem.onClick()}
                            className={styles.cellButton}
                          >
                            {cellItem.label}
                          </ActionButton>
                        )}
                      </Cell>
                    );
                  }
                })}
              </div>
            );
          })}
        </section>
      </section>
      <section className={styles.pagination}>
        <div className={styles.recordNumberWrapper}>
          Showing <span className={styles.recordNumber}>10</span> of{" "}
          <span className={styles.recordNumber}>60</span> records
        </div>
        <div className={styles.buttonsWrapper}>
          <Button className={styles.paginationButton}>Previous</Button>
          <div className={styles.pageNumber}>
            <div>1</div>
          </div>
          <Button className={styles.paginationButton}>Next</Button>
        </div>
      </section>
    </main>
  );
}

interface CellProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
function HeaderCell({ children, style, onClick }: CellProps) {
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
function Cell({ children, style }: CellProps) {
  return (
    <div
      className={styles.cell + " " + styles.userCell}
      style={style ? style : {}}
    >
      {children}
    </div>
  );
}

function IconSort() {
  return (
    <Image
      src={`/assets/images/icon_sort.png`}
      alt={"Sort icon"}
      width={24}
      height={24}
    />
  );
}
function IconSortUp() {
  return (
    <Image
      src={`/assets/images/icon_triangle_up.png`}
      alt={"Sort icon"}
      width={24}
      height={24}
    />
  );
}
function IconSortDown() {
  return (
    <Image
      src={`/assets/images/icon_triangle_down.png`}
      alt={"Sort icon"}
      width={24}
      height={24}
    />
  );
}
