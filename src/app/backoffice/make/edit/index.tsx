import styles from "./index.module.scss";
import ContentSection from "./ContentSection";
import HeaderSection from "./HeaderSection";
import { useParams } from "react-router-dom";
import {
  getListApproverGroups,
  getListDepartments,
  getListRoles,
  getStaffSimple,
} from "@/src/services/query";
import { useSuspenseQueries } from "@tanstack/react-query";

export default function BoMakeEdit() {
  const { userId = "" } = useParams();

  const [
    { data: staffData },
    { data: departmentList },
    { data: roleList },
    { data: approverGroupList },
  ] = useSuspenseQueries({
    queries: [
      getStaffSimple(userId),
      getListDepartments(),
      getListRoles(),
      getListApproverGroups(),
    ],
  });

  return (
    <div className={styles.container}>
      <HeaderSection />
      <ContentSection
        staff={staffData}
        departmentList={departmentList}
        roleList={roleList}
        approverGroupList={approverGroupList}
      />
    </div>
  );
}
