import { get } from "@/services/api";
import { routes } from "@/config/routes";
import { ListItem, SimpleStaff } from "@/config/types";

function getListDepartments() {
  return {
    queryKey: ["list", "departments"],
    queryFn: () => get<ListItem[]>(routes.getListDepartments),
    staleTime: 60 * 1000,
  };
}
function getListRoles() {
  return {
    queryKey: ["list", "roles"],
    queryFn: () => get<ListItem[]>(routes.getListRoles),
    staleTime: 60 * 1000,
  };
}
function getListApproverGroups() {
  return {
    queryKey: ["list", "approverGroups"],
    queryFn: () => get<ListItem[]>(routes.getListApproverGroups),
    staleTime: 60 * 1000,
  };
}
function getListStatus() {
  return {
    queryKey: ["list", "status"],
    queryFn: () => [
      { label: "Pending Approval", value: "Pending Approval" },
      { label: "Active", value: "Active" },
      { label: "Rejected", value: "Rejected" },
      { label: "Reopened", value: "Reopened" },
      { label: "Deleted", value: "Deleted" },
    ],
    staleTime: 60 * 1000,
  };
}

function getStaffSimple(staffId: string) {
  return {
    queryKey: ["list", "staffSimple", staffId],
    queryFn: () =>
      get<SimpleStaff>(routes.getStaffSimple.replace("{USER_ID}", staffId)),
    staleTime: 60 * 1000,
  };
}

export {
  getListDepartments,
  getListRoles,
  getListApproverGroups,
  getListStatus,
  getStaffSimple,
};
