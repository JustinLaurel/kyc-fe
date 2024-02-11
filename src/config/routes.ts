const base = "http://localhost:8080";
const routes = {
  login: `${base}/auth/login`,
  getListDepartments: `${base}/constant/list/departments`,
  getListApproverGroups: `${base}/constant/list/approver-groups`,
  getStaffSimple: `${base}/staff/simple/{STAFF_ID}`,
  submitAddUser: `${base}/staff/add`,
};

export { routes };
