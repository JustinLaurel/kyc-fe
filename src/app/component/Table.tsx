"use client";
import styles from "./table.module.scss";
import Image from "next/image";
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from "@coreui/icons";
import { useState } from "react";
import { StringNumberObject } from "../types";

interface Props {
  items: StringNumberObject[];
  headers: string[];
  colWidths?: (number | null)[];
}
/**
 * Standard table.
 *
 * @param {StringNumberObject[]} props.items - Items displayed in table body. Must be same array length as props.headers
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
