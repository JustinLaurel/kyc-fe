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
  // items & headers must same length
  items: StringNumberObject[];
  headers: string[];
}
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
