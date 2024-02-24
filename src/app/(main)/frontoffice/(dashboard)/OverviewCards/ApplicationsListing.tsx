import ActionButton, { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import styles from "./index.module.scss";
import DataTable from "@/components/DataTable";

export default function ApplicationsListing() {
  return (
    <Card
      className={styles.applicationsListing}
      header={
        <div className={styles.headerContainer}>
          <div>Total Applications</div>
          <div className={styles.applicationsCount}>[138]</div>
          <ActionButton className={styles.createNewButton} onClick={() => {}}>
            Create New
          </ActionButton>
        </div>
      }
      headerButton={{
        label: "View All",
        colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        onClick: () => console.log("View All"),
      }}
    >
      <DataTable
        items={DATATABLE_FAKE_DATA}
        headers={[
          {
            label: "Application ID",
            onClick: () => console.log("Application ID"),
          },
          {
            label: "Customer Name",
            onClick: () => console.log("Customer Name"),
          },
          {
            label: "ID Type",
            onClick: () => console.log("ID Type"),
          },
          {
            label: "ID No",
            onClick: () => console.log("ID No"),
          },
          {
            label: "Submission Date",
            onClick: () => console.log("Submission Date"),
          },
          {
            label: "Status",
            onClick: () => console.log("Status"),
          },
        ]}
        colWidths={[120, 140, 68, 112, 116, 120, 140]}
      />
    </Card>
  );
}

const DATATABLE_FAKE_DATA = [
  {
    applicationId: "UKYC2023083100001",
    customerName: {
      label: "Quantum Solutions Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123456",
    submissionDate: "31/08/2023",
    status: "Pending RM Approver",
  },
  {
    applicationId: "UKYC2023082300024",
    customerName: {
      label: "Crestline Technologies Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123457",
    submissionDate: "30/08/2023",
    status: "Pending for Review in Net Reveal",
  },
  {
    applicationId: "UKYC2023082300386",
    customerName: {
      label: "Nexus Dynamics Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123458",
    submissionDate: "29/08/2023",
    status: "Reopened",
  },
  {
    applicationId: "UKYC2023082303573",
    customerName: {
      label: "Horizon Ventures Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123459",
    submissionDate: "28/08/2023",
    status: "Approved by Net Reveal",
  },
  {
    applicationId: "UKYC2023082335763",
    customerName: {
      label: "Stellar Innovations Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123460",
    submissionDate: "27/08/2023",
    status: "Draft",
  },
  {
    applicationId: "UKYC2023082300024",
    customerName: {
      label: "Pinnacle Enterprises Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123461",
    submissionDate: "26/08/2023",
    status: "Pending for Review in Net Reveal",
  },
  {
    applicationId: "UKYC2023082300930",
    customerName: {
      label: "Synergy Systems Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123462",
    submissionDate: "25/08/2023",
    status: "Pending for Review in Net Reveal",
  },
  {
    applicationId: "UKYC2023082303579",
    customerName: {
      label: "Velocity Holdings Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123463",
    submissionDate: "24/08/2023",
    status: "Pending for Review in Net Reveal",
  },
  {
    applicationId: "UKYC2023082300346",
    customerName: {
      label: "Eclipse Innovate Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123464",
    submissionDate: "23/08/2023",
    status: "Rejected by Net Reveal",
  },
  {
    applicationId: "UKYC2023082303649",
    customerName: {
      label: "Zenith Group Sdn Bhd",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "BRN",
    idNo: "202005123465",
    submissionDate: "22/08/2023",
    status: "Rejected by RM Approver",
  },
];
