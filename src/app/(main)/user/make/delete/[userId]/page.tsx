import styles from "./page.module.scss";
import RouteStepsView from "./RouteStepsView";
import ContentSection from "./ContentSection";
import { getServer } from "@/services/serverApi";
import { routes } from "@/config/routes";
import { convertNullToEmptyString } from "@/util";

interface UserDeletePageProps {
  params: {
    userId: string;
  };
}
export default async function UserDeletePage({ params }: UserDeletePageProps) {
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
        <div className={styles.header}>Delete User</div>
        <RouteStepsView />
      </section>
      <ContentSection
        staff={convertNullToEmptyString(staffData)}
        departmentList={departmentList}
        roleList={roleList}
        approverGroupList={approverGroupList}
      />
    </div>
  );
}
