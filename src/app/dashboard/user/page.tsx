"use client";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import styles from "./styles.module.scss";

export default function User() {
  const [headers, setHeaders] = useState([
    "No",
    "Name",
    "User ID",
    "Department/Branch",
    "User Role",
    "Activity",
    "Status",
    "Action",
  ]);
  const [items, setItems] = useState([
    {
      no: 1,
      name: "Chiew Weng Keat",
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: "Review",
    },
    {
      no: 2,
      name: "Chiew Weng Keat",
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: "Review",
    },
    {
      no: 3,
      name: "Chiew Weng Keat",
      userId: "1234567890",
      department: "Lorem Ipsum",
      userRole: "Lorem Ipsum",
      activity: "Delete User",
      status: "Active",
      action: "Review",
    },
  ]);
  return (
    <section className={styles.userContainer}>
      <div className={styles.header}>User Management</div>
      <SearchBar />
      <UserList items={items} headers={headers} />
    </section>
  );
}
