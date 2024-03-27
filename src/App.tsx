import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Login = loadable(() => import("@/src/login"));
const LoginLayout = loadable(() => import("@/src/login/layout"));

const MyProfile = loadable(() => import("@/app/myProfile"));
const Notification = loadable(() => import("@/app/notification"));

const DefaultLayout = loadable(() => import("@/app/layout"));
const FrontOffice = loadable(() => import("@/frontoffice/(dashboard)"));
const FoApplication = loadable(() => import("@/frontoffice/application"));
const FoAuditLog = loadable(() => import("@/frontoffice/auditLog"));
const FoCustomer = loadable(() => import("@/frontoffice/customer"));
const FoCustomerAdd = loadable(() => import("@/frontoffice/customer/add"));
const FoCustomerView = loadable(() => import("@/frontoffice/customer/view"));
const FoCustomerViewAudit = loadable(
  () => import("@/frontoffice/customer/view/audit")
);
const BoMake = loadable(() => import("@/backoffice/make"));
const BoMakeAdd = loadable(() => import("@/backoffice/make/add"));
const BoMakeDelete = loadable(() => import("@/backoffice/make/delete"));
const BoMakeEdit = loadable(() => import("@/backoffice/make/add"));
const BoMakeView = loadable(() => import("@/backoffice/make/add"));
const BoApp = loadable(() => import("@/backoffice/make/add"));
const BoAppAdd = loadable(() => import("@/backoffice/make/add"));
const BoAppDelete = loadable(() => import("@/backoffice/make/delete"));
const BoAppEdit = loadable(() => import("@/backoffice/make/edit"));
const BoAppView = loadable(() => import("@/backoffice/make/view"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="notification" element={<Notification />} />
          <Route path="frontoffice">
            <Route path="" element={<FrontOffice />} />
            <Route path="application" element={<FoApplication />} />
            <Route path="auditLog" element={<FoAuditLog />} />
            <Route path="customer">
              <Route path="" element={<FoCustomer />} />
              <Route path="add" element={<FoCustomerAdd />} />
              <Route path="view/:userId" element={<FoCustomerView />} />
              <Route
                path="view/audit/:userId"
                element={<FoCustomerViewAudit />}
              />
            </Route>
          </Route>
          <Route path="backoffice">
            <Route path="make" element={<BoMake />}>
              <Route path="add" element={<BoMakeAdd />} />
              <Route path="delete/:userId" element={<BoMakeDelete />} />
              <Route path="edit/:userId" element={<BoMakeEdit />} />
              <Route path="view/:userId" element={<BoMakeView />} />
            </Route>
            <Route path="approve" element={<BoApp />}>
              <Route path="add" element={<BoAppAdd />} />
              <Route path="delete/:userId" element={<BoAppDelete />} />
              <Route path="edit/:userId" element={<BoAppEdit />} />
              <Route path="view/:userId" element={<BoAppView />} />
            </Route>
          </Route>
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
