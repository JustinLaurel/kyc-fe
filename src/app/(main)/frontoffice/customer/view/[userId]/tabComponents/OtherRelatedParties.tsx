import Card from "@/components/Card";
import DataTable from "@/components/DataTable";

export default function OtherRelatedParties() {
  return (
    <Card
      header={"Other Related Parties Details (if any)"}
      subheader={"List of Other Related Parties"}
      headerButton={{
        label: "Add",
        onClick: () => {},
      }}
    >
      <DataTable
        items={FAKE_DATA}
        headers={[
          {
            label: "Name",
            onClick: () => {},
          },
          {
            label: "ID Type",
            onClick: () => {},
          },
          {
            label: "ID No",
            onClick: () => {},
          },
          {
            label: "Relationship",
            onClick: () => {},
          },
          {
            label: "Validity",
            onClick: () => {},
          },
          {
            label: "Status",
            onClick: () => {},
          },
        ]}
        colWidths={[201.6, 201.6, 201.6, 201.6, 201.6, 104]}
        config={{
          uniformRowColor: true,
        }}
      />
    </Card>
  );
}

const FAKE_DATA = [
  {
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    relationship: "Signatory",
    validity: "01/01/2023 to 31/12/2024",
    status: "Active",
  },
  {
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    relationship: "Signatory",
    validity: "01/01/2023 to 31/12/2024",
    status: "Active",
  },
  {
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    relationship: "Signatory",
    validity: "01/01/2023 to 31/12/2024",
    status: "Active",
  },
  {
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    relationship: "Signatory",
    validity: "01/01/2023 to 31/12/2024",
    status: "Active",
  },
  {
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    relationship: "Signatory",
    validity: "01/01/2023 to 31/12/2024",
    status: "Active",
  },
  {
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    relationship: "Signatory",
    validity: "01/01/2023 to 31/12/2024",
    status: "Active",
  },
];
