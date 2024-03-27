import styles from "./index.module.scss";
import UserSection from "./UserSection";
import HeaderSection from "./HeaderSection";
import { convertNullToEmptyString } from "@/util";
import {
  getListApproverGroups,
  getListDepartments,
  getListRoles,
  getStaffSimple,
} from "@/src/services/query";
import { useSuspenseQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function BoAppEdit() {
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
      <UserSection
        staff={convertNullToEmptyString(staffData)}
        approverGroupList={approverGroupList}
        departmentList={departmentList}
        roleList={roleList}
      />
    </div>
  );
}
