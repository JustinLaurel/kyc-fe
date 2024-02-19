"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { ValueOf } from "@/util";
import TextButton from "../TextButton";
import ActionButton from "../ActionButton";

const ICON_SORT_TYPE = {
  UP: "UP",
  DOWN: "DOWN",
} as const;

interface HeaderSortButton {
  // For attaching sort onClick event to header cell
  label: string;
  onClick: () => void;
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
  const [sortImages, setSortImages] = useState<
    Record<string, ValueOf<typeof ICON_SORT_TYPE>>
  >({});

  function toggleSortImages(headerLabel: string) {
    setSortImages((prev) => {
      const currentSortType = prev[headerLabel];
      if (!currentSortType) {
        return {
          [headerLabel]: ICON_SORT_TYPE.DOWN,
        };
      } else if (currentSortType === ICON_SORT_TYPE.DOWN) {
        return {
          [headerLabel]: ICON_SORT_TYPE.UP,
        };
      } else {
        return {};
      }
    });
  }

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
                style={{ ...flexStyle, cursor: "pointer" }}
                onClick={() => {
                  toggleSortImages(header.label);
                  header.onClick();
                }}
              >
                <div className={styles.title}>{header.label}</div>
                {sortImages[header.label] === ICON_SORT_TYPE.UP ? (
                  <IconSortUp />
                ) : sortImages[header.label] === ICON_SORT_TYPE.DOWN ? (
                  <IconSortDown />
                ) : (
                  <IconSort />
                )}
              </CellHeader>
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
                if (!cellItem || typeof cellItem === "string" || typeof cellItem === "number") {
                  return (
                    <CellUser key={cellIndex} style={flexStyle}>
                      {cellItem}
                    </CellUser>
                  );
                } else if (Array.isArray(cellItem)) {
                  return (
                    <CellUser key={cellIndex} style={flexStyle}>
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
                    </CellUser>
                  );
                } else {
                  return (
                    <CellUser key={cellIndex} style={flexStyle}>
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
