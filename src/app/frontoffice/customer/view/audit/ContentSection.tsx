import Card from "@/components/Card";
import DataTable from "@/components/DataTable";

export default function ContentSection() {
  return (
    <Card header={"AeroGuardians SDN BHD"} subheader={"Audit History"}>
      <DataTable
        items={FAKE_DATA}
        headers={[
          {
            label: "Timestamp",
            onClick: () => {},
          },
          {
            label: "Performed by",
            onClick: () => {},
          },
          {
            label: "User Role",
            onClick: () => {},
          },
          {
            label: "Application ID",
            onClick: () => {},
          },
          {
            label: "Activity",
            onClick: () => {},
          },
          {
            label: "Reason",
            onClick: () => {},
          },
          {
            label: "From Status",
            onClick: () => {},
          },
          {
            label: "To Status",
            onClick: () => {},
          },
        ]}
        colWidths={[112, 112, 94, 120, 200, 170, 136, 136]}
      />
    </Card>
  );
}

const FAKE_DATA = [
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
  {
    timestamp: "23/05/2023  3:35:00 PM",
    performedBy: "Bryan Low (123455c)",
    userRole: "RM Maker",
    applicationId: "10000027",
    activity: "Submitted the application for RM Approver",
    reason: "N/A",
    fromStatus: "Pending RM Approver",
    toStatus: "Pending for Review in Net Reveal",
  },
];
