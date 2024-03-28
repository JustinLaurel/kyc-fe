import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { Suspense, useEffect, useState } from "react";

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
const BoMakeEdit = loadable(() => import("@/backoffice/make/edit"));
const BoMakeView = loadable(() => import("@/backoffice/make/view"));
const BoApp = loadable(() => import("@/backoffice/approve"));
const BoAppAdd = loadable(() => import("@/backoffice/approve/add"));
const BoAppDelete = loadable(() => import("@/backoffice/approve/delete"));
const BoAppEdit = loadable(() => import("@/backoffice/approve/edit"));
const BoAppView = loadable(() => import("@/backoffice/approve/view"));

const ReactQueryDevtoolsProduction = loadable(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

export const page = {
  LOGIN: "/login",
  FO_DASHBOARD: "/frontoffice",
  FO_AUDIT: "/frontoffice/auditLog",
  FO_CUST: "/frontoffice/customer",
  FO_CUST_ADD: "/frontoffice/customer/add",
  FO_CUST_VIEW: "/frontoffice/customer/view/:userId",
  FO_CUST_VIEW_AUDIT: "/frontoffice/customer/view/audit",
  FO_APPLICATIONS: "/frontoffice/application",
  BO_MAKE: "/backoffice/make",
  BO_MAKE_ADD: "/backoffice/make/add",
  BO_MAKE_DELETE: "/backoffice/make/delete/:userId",
  BO_MAKE_EDIT: "/backoffice/make/edit/:userId",
  BO_MAKE_VIEW: "/backoffice/make/view/:userId",
  BO_APP: "/backoffice/approve",
  BO_APP_ADD: "/backoffice/approve/add",
  BO_APP_DELETE: "/backoffice/approve/delete/:userId",
  BO_APP_EDIT: "/backoffice/approve/edit/:userId",
  BO_APP_VIEW: "/backoffice/approve/view/:userId",
  MY_PROFILE: "/myProfile",
  NOTIFICATION: "/notification",
};

function App() {
  const [showDevtools, setShowDevtools] = useState(false);
  useEffect(() => {
    // Call window.toggleDevTools() on console to open devtools
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={page.FO_DASHBOARD}>
            <Route path={page.FO_DASHBOARD} element={<FrontOffice />} />
            <Route path={page.FO_APPLICATIONS} element={<FoApplication />} />
            <Route path={page.FO_AUDIT} element={<FoAuditLog />} />
            <Route path={page.FO_CUST}>
              <Route path={page.FO_CUST} element={<FoCustomer />} />
              <Route path={page.FO_CUST_ADD} element={<FoCustomerAdd />} />
              <Route path={page.FO_CUST_VIEW} element={<FoCustomerView />} />
              <Route
                path={page.FO_CUST_VIEW_AUDIT}
                element={<FoCustomerViewAudit />}
              />
            </Route>
          </Route>
          <Route path="backoffice">
            <Route path={page.BO_MAKE}>
              <Route path={page.BO_MAKE} element={<BoMake />} />
              <Route path={page.BO_MAKE_ADD} element={<BoMakeAdd />} />
              <Route path={page.BO_MAKE_DELETE} element={<BoMakeDelete />} />
              <Route path={page.BO_MAKE_EDIT} element={<BoMakeEdit />} />
              <Route path={page.BO_MAKE_VIEW} element={<BoMakeView />} />
            </Route>
            <Route path={page.BO_APP} element={<BoApp />}>
              <Route path={page.BO_APP_ADD} element={<BoAppAdd />} />
              <Route path={page.BO_APP_DELETE} element={<BoAppDelete />} />
              <Route path={page.BO_APP_EDIT} element={<BoAppEdit />} />
              <Route path={page.BO_APP_VIEW} element={<BoAppView />} />
            </Route>
          </Route>
          <Route path={page.MY_PROFILE} element={<MyProfile />} />
          <Route path={page.NOTIFICATION} element={<Notification />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path={page.LOGIN} element={<Login />} />
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </>
  );
}

export default App;
