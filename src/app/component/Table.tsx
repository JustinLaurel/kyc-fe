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

interface Props {
  items: {
    name: string;
    userId: string;
    department: string;
    userRole: string;
    activity: string;
    status: string;
    action: string;
  }[];
}
export default function Table(props: Props) {
  return (
    <main className={styles.table}>
      <section className={styles.headerSection}>
        <CellHeader>No</CellHeader>
        <CellHeader>Name</CellHeader>
        <CellHeader>User ID</CellHeader>
        <CellHeader>Department/Branch</CellHeader>
        <CellHeader>User Role</CellHeader>
        <CellHeader>Activity</CellHeader>
        <CellHeader>Status</CellHeader>
        <CellHeader>Action</CellHeader>
      </section>
      <section className={styles.usersSection}>
        {props.items.map((item, index) => {
          return (
            <div
              key={index}
              className={
                styles.row + (index % 2 === 0 ? " " + styles.even : "")
              }
            >
              <CellUser>{index + 1}</CellUser>
              <CellUser>{item.name}</CellUser>
              <CellUser>{item.userId}</CellUser>
              <CellUser>{item.department}</CellUser>
              <CellUser>{item.userRole}</CellUser>
              <CellUser>{item.activity}</CellUser>
              <CellUser>{item.status}</CellUser>
              <CellUser>{item.action}</CellUser>
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
  return <div className={styles.cell + " " + styles.headerCell}>{children}</div>;
}
function CellUser({ children }: CellProps) {
  return <div className={styles.cell + " " + styles.userCell}>{children}</div>;
}