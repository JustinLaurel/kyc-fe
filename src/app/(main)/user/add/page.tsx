import styles from "./page.module.scss";
import UserSection from "./component/UserSection";
import HeaderSection from "./component/HeaderSection";
import { getServer } from "@/services/serverApi";
import { routes } from "@/services/api";

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
