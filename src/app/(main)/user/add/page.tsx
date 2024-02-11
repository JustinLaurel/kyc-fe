import styles from "./page.module.scss";
import UserSection from "./UserSection";
import HeaderSection from "./HeaderSection";
import { getServer } from "@/services/serverApi";
import { routes } from "@/config/routes";

export default async function UserAddPage() {
  const departmentList = await getServer(routes.getListDepartments);
  const approverGroupList = await getServer(routes.getListApproverGroups);

  return (
    <div className={styles.container}>
      <HeaderSection />
      <UserSection
        approverGroupList={approverGroupList}
        departmentList={departmentList}
      />
    </div>
  );
}
