import React from "react";
import styles from "./page.module.scss";
import { routes } from "@/config/routes";
import { getServer, postServer } from "@/services/serverApi";
import HeaderSection from "./components/HeaderSection";
import ContentSection from "./components/ContentSection";

export default async function SearchPage() {
  const departmentList = await getServer(routes.getListDepartments);
  const roleList = await getServer(routes.getListRoles);
  const result = await postServer(routes.searchUser, {
    name: "",
    role: "",
    userId: "",
    status: "",
    department: "",
    page: 0,
    sortBy: "",
    itemsPerPage: 10,
  });

  return (
    <section className={styles.userContainer}>
      <HeaderSection />
      <ContentSection departmentList={departmentList} roleList={roleList} users={result.items} />
    </section>
  );
}
