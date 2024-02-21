import styles from "./page.module.scss";
import { routes } from "@/config/routes";
import { getServer } from "@/services/serverApi";
import RouteStepsView from "./RouteStepsView";
import { convertNullToEmptyString } from "@/util";
import ContentSection from "./ContentSection";

interface UserViewPageProps {
  params: {
    userId: string;
  };
}
export default async function UserViewPage({ params }: UserViewPageProps) {
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
        <div className={styles.header}>View User</div>
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
