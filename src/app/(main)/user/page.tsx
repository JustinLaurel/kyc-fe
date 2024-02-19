import React from "react";
import styles from "./page.module.scss";
import { routes } from "@/config/routes";
import { getServer, postServer } from "@/services/serverApi";
import HeaderSection from "./components/HeaderSection";
import ContentSection from "./components/ContentSection";

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
  const roleList = await getServer(routes.getListRoles);
  const usersRaw = await postServer(routes.searchUser, {
    name: "",
    role: "",
    userId: "",
    status: "",
    department: "",
    page: 0,
    sortBy: "",
    itemsPerPage: 10,
  });
  const users = usersRaw.items.map((item: any, index: number) => {
    return {
      no: index + 1,
      ...item
    }
  });

  console.log(`users`, users);

  return (
    <section className={styles.userContainer}>
      <HeaderSection />
      <ContentSection departmentList={departmentList} roleList={roleList} users={users} />
    </section>
  );
}
