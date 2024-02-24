import Card from "@/components/Card";
import styles from "./index.module.scss";
import DataTable from "@/components/DataTable";

export default function SearchListing() {
  return (
    <Card
      header={"Search Listing"}
      headerButton={{
        label: "Refresh Status",
        onClick: () => {},
      }}
      classes={{
        headerButton: styles.refreshStatusButton,
      }}
    >
      <DataTable
        items={FAKE_DATA}
        headers={[
          { label: "ID Type", onClick: () => {} },
          { label: "ID No", onClick: () => {} },
          { label: "Customer Type", onClick: () => {} },
          { label: "Country of Incorporation", onClick: () => {} },
          { label: "Date of Incorporation", onClick: () => {} },
          { label: "Result Status", onClick: () => {} },
          { label: "Error Messages", onClick: () => {} },
          "Action"
        ]}
        colWidths={[72, 202, 120, 136, 136, 80, 104, 230]}
      />
    </Card>
  );
}

const FAKE_DATA = [
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Processing",
    errorMessages: "",
    actions: "",
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Stop",
    errorMessages: "<error message>",
    actions: "",
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Processing",
    errorMessages: "",
    actions: [
      {
        label: "Trigger SSM",
        onClick: () => {},
      },
      {
        label: "Update Manually",
        onClick: () => {},
      },
    ],
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Ready",
    errorMessages: "",
    actions: [
      {
        label: "View",
        onClick: () => {},
      },
    ],
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Ready",
    errorMessages: "",
    actions: [
      {
        label: "View",
        onClick: () => {},
      },
    ],
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Ready",
    errorMessages: "",
    actions: [
      {
        label: "View",
        onClick: () => {},
      },
    ],
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Ready",
    errorMessages: "",
    actions: [
      {
        label: "View",
        onClick: () => {},
      },
    ],
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Error",
    errorMessages: "<error message>",
    actions: [
      {
        label: "Retry",
        onClick: () => {},
      },
      {
        label: "Update Manually",
        onClick: () => {},
      },
    ],
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Error",
    errorMessages: "<error message>",
    actions: [
      {
        label: "Retry",
        onClick: () => {},
      },
      {
        label: "Update Manually",
        onClick: () => {},
      },
    ],
  },
  {
    idType: "BRN",
    idNo: "202005123461",
    customerType: "C-Corporate",
    countryOfIncorporation: "Malaysia",
    dateOfIncorporation: "23/08/2023",
    resultStatus: "Error",
    errorMessages: "<error message>",
    actions: [
      {
        label: "Retry",
        onClick: () => {},
      },
      {
        label: "Update Manually",
        onClick: () => {},
      },
    ],
  },
];
