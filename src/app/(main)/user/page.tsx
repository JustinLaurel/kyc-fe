import React from "react";
import styles from "./page.module.scss";
import SearchBar from "./components/SearchBar";
import SearchTable from "./components/SearchTable";
import Header from "./components/Header";
import { routes } from "@/services/api";
import { getServer } from "@/services/serverApi";

const TABLE_ITEMS = [
  {
    no: "1",
    name: "Chiew Weng Keat",
    userId: "111111",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
  {
    no: "2",
    name: "Chiew Weng Keat",
    userId: "222222",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
  {
    no: "3",
    name: "Chiew Weng Keat",
    userId: "333333",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
  {
    no: "4",
    name: "Chiew Weng Keat",
    userId: "444444",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
  {
    no: "5",
    name: "Chiew Weng Keat",
    userId: "555555",
    department: "Lorem Ipsum",
    userRole: "Lorem Ipsum",
    activity: "Delete User",
    status: "Active",
  },
];

export default async function SearchPage() {
  const departmentList = await getServer(routes.getListDepartments);

  return (
    <section className={styles.userContainer}>
      <Header />
      <SearchBar 
        departmentList={departmentList}
        />
      <SearchTable users={TABLE_ITEMS} />
    </section>
  );
}
