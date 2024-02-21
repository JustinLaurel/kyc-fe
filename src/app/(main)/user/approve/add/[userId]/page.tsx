import styles from "./page.module.scss";
import UserSection from "./UserSection";
import HeaderSection from "./HeaderSection";
import { getServer } from "@/services/serverApi";
import { routes } from "@/config/routes";
import { convertNullToEmptyString } from "@/util";

interface UserAddPageProps {
  params: {
    userId: string;
  };
}

export default async function UserAddPage({ params }: UserAddPageProps) {
  const { userId } = params;

  const staffData = await getServer(
    routes.getStaffSimple.replace("{USER_ID}", userId)
  );
  const departmentList = await getServer(routes.getListDepartments);
  const approverGroupList = await getServer(routes.getListApproverGroups);
  const roleList = await getServer(routes.getListRoles);

  return (
    <div className={styles.container}>
      <HeaderSection />
      <UserSection
        staff={convertNullToEmptyString(staffData)}
        approverGroupList={approverGroupList}
        departmentList={departmentList}
        roleList={roleList}
      />
    </div>
  );
}
