const base = "http://localhost:8080";
const routes = {
  login: `${base}/auth/login`,
  getListDepartments: `${base}/constant/list/departments`,
  getListApproverGroups: `${base}/constant/list/approver-groups`,
  getListRoles: `${base}/constant/list/staff-roles`,
  getStaffSimple: `${base}/staff/simple/{USER_ID}`,
  submitAddStaff: `${base}/staff/add`,
  submitEditStaff: `${base}/staff/edit`,
  submitDeleteStaff: `${base}/staff/delete`,
  searchUser: `${base}/staff/search`,
};

export { routes };
