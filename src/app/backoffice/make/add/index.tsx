import styles from "./index.module.scss";
import UserSection from "./UserSection";
import HeaderSection from "./HeaderSection";
import { get } from "@/services/api";
import { routes } from "@/config/routes";
import { useSuspenseQueries } from "@tanstack/react-query";
import {
  getListApproverGroups,
  getListDepartments,
  getListRoles,
} from "@/src/services/query";
import { Suspense } from "react";

export default function BoMakeAdd() {
  const [
    { data: departmentList },
    { data: approverGroupList },
    { data: roleList },
  ] = useSuspenseQueries({
    queries: [getListDepartments(), getListApproverGroups(), getListRoles()],
  });

  return (
    <div className={styles.container}>
      <HeaderSection />
      <Suspense>
        <UserSection
          approverGroupList={approverGroupList}
          departmentList={departmentList}
          roleList={roleList}
        />
      </Suspense>
    </div>
  );
}
