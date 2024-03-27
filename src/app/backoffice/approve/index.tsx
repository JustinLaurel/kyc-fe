import styles from "./index.module.scss";
import HeaderSection from "./components/HeaderSection";
import ContentSection from "./components/ContentSection";
import { getListDepartments, getListRoles } from "@/src/services/query";
import { useSuspenseQueries } from "@tanstack/react-query";

export default function BoApp() {
  const [{ data: departmentList }, { data: roleList }] = useSuspenseQueries({
    queries: [getListDepartments(), getListRoles()],
  });

  return (
    <section className={styles.userContainer}>
      <HeaderSection />
      <ContentSection departmentList={departmentList} roleList={roleList} />
    </section>
  );
}
