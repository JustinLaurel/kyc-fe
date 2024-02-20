import styles from "./page.module.scss";
import RouteStepsView from "./RouteStepsView";
import { getServer } from "@/services/serverApi";
import { routes } from "@/config/routes";
import ContentSection from "./ContentSection";

interface UserViewPageProps {
  params: {
    userId: string;
  };
}
export default async function UserEditPage({ params }: UserViewPageProps) {
  const { userId } = params;

  const staffData = await getServer(
    routes.getStaffSimple.replace("{USER_ID}", userId)
  );
  const departmentList = await getServer(routes.getListDepartments);
  const roleList = await getServer(routes.getListRoles);
  const approverGroupList = await getServer(routes.getListApproverGroups);

  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <div className={styles.header}>Edit User</div>
        <RouteStepsView />
      </section>
      <ContentSection
        staff={staffData}
        departmentList={departmentList}
        roleList={roleList}
        approverGroupList={approverGroupList}
      />
    </div>
  );
}
