import styles from "./index.module.scss";
import HeaderSection from "./HeaderSection";
import ContentSection from "./ContentSection";
import { convertNullToEmptyString } from "@/util";
import { useParams } from "react-router-dom";
import { useSuspenseQueries } from "@tanstack/react-query";
import {
  getListApproverGroups,
  getListDepartments,
  getListRoles,
  getStaffSimple,
} from "@/src/services/query";

export default function BoMakeDelete() {
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
        staff={convertNullToEmptyString(staffData)}
        departmentList={departmentList}
        roleList={roleList}
        approverGroupList={approverGroupList}
      />
    </div>
  );
}
