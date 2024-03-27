import { memo, useCallback, useMemo, useState } from "react";
import styles from "./index.module.scss";
import TextButton from "../TextButton";
import ActionButton from "../ActionButton";
import { Button } from "@mui/material";
import { SORT_ORDER } from "@/config/types";
import { CellButton, HeaderSortButton, RowConfig, TableConfig } from "./type";
import { CellProps } from "./type";

type Props = {
  items: Record<string, string | number | CellButton | CellButton[]>[];
  headers: (string | HeaderSortButton)[];
  colWidths?: number[] | null;
  disableNumbering?: boolean;
  rowConfig?: RowConfig[];
  config?: TableConfig;
};
/**
 * Standard table.
 * items.length === headers.length === colWidths.length MUST be true
 * @param {Record<string, string | CellButton | CellButton[]>[]} props.items - Items displayed in table body
 * @param {string[]} props.headers - Headers. Use {HeaderSortButton} if need sorting
 * @param {number[]} props.colWidths - Width fraction occupied by each column
 * @param {boolean} props.disableNumbering - Disable automatic numbering
 * @param {boolean} props.rowConfig - Special styling/logic for specified row index
 */
const DataTable = memo(function DataTable(props: Props) {
  const {
    items,
    headers,
    colWidths = null,
    disableNumbering = false,
    rowConfig = [],
    config = {},
  } = props;
  const [sortOrders, setSortOrders] = useState<Record<string, SORT_ORDER>>({});

  function sortOrderToggler(currentOrder: SORT_ORDER) {
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

  const handleHeaderSort = useCallback(
    (header: HeaderSortButton) => {
      const currentSortOrder = sortOrders[header.label] ?? SORT_ORDER.DEFAULT;
      const newSortOrder = sortOrderToggler(currentSortOrder);
      if (newSortOrder === SORT_ORDER.DEFAULT) {
        setSortOrders({});
      } else {
        setSortOrders({
          [header.label]: newSortOrder,
        });
      }
      header.onClick(newSortOrder);
    },
    [sortOrders]
  );

  const rowConfigMap = useMemo(() => {
    const config = new Map<number, RowConfig>();
    rowConfig.forEach((row) => {
      config.set(row.rowIndex, { ...row });
    });
    return config;
  }, [rowConfig]);

  return (
    <main className={styles.table}>
      <section className={styles.content}>
        <section className={styles.headerSection}>
          {!disableNumbering && (
            <HeaderCell className={styles.numberingCell}>No</HeaderCell>
          )}
          {useMemo(() => {
            return headers.map((header, index) => {
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
            });
          }, [headers, colWidths, sortOrders, handleHeaderSort])}
        </section>
        <section className={styles.usersSection}>
          {useMemo(() => {
            return items.map((item, rowIndex) => {
              const shouldHighlightRow = Boolean(
                rowConfigMap.get(rowIndex)?.isHighlighted
              );
              return (
                <div
                  key={rowIndex}
                  className={
                    styles.row +
                    (!config.uniformRowColor && rowIndex % 2 === 0
                      ? ` ${styles.greyBackground}`
                      : "") +
                    (shouldHighlightRow ? ` ${styles.pinkBackground}` : "")
                  }
                >
                  {!disableNumbering && (
                    <Cell className={styles.numberingCell}>{rowIndex + 1}</Cell>
                  )}
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
            });
          }, [items, config, rowConfigMap, colWidths, disableNumbering])}
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
});

function HeaderCell({ children, style, onClick, className = "" }: CellProps) {
  return (
    <div
      className={
        styles.cell +
        " " +
        styles.headerCell +
        (className ? ` ${className}` : "")
      }
      style={style ? style : {}}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {children}
    </div>
  );
}
function Cell({ children, style, className = "" }: CellProps) {
  return (
    <div
      className={
        styles.cell + " " + styles.userCell + (className ? ` ${className}` : "")
      }
      style={style ? style : {}}
    >
      {children}
    </div>
  );
}

function IconSort() {
  return (
    <img
      src={`/assets/images/icon_sort.png`}
      alt={"Sort icon"}
      width={24}
      height={24}
    />
  );
}
function IconSortUp() {
  return (
    <img
      src={`/assets/images/icon_triangle_up.png`}
      alt={"Sort icon"}
      width={24}
      height={24}
    />
  );
}
function IconSortDown() {
  return (
    <img
      src={`/assets/images/icon_triangle_down.png`}
      alt={"Sort icon"}
      width={24}
      height={24}
    />
  );
}

export default DataTable;
