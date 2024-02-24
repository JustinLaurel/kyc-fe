import Card from "@/components/Card";
import styles from "./ubo.module.scss";
import DataTable from "@/components/DataTable";

export default function Ubo() {
  return (
    <Card
      header={"UBO Details"}
      subheader={"List of UBO(s)"}
      headerButton={{
        label: "Add",
        onClick: () => {},
      }}
    >
      <DataTable
        items={FAKE_DATA}
        headers={HEADERS}
        colWidths={[68, 104, 88, 68, 128, 128, 128, 122, 110, 104]}
        rowConfig={[{ rowIndex: 1, isHighlighted: true }]}
        config={{
          uniformRowColor: true,
        }}
      />
    </Card>
  );
}

const HEADERS = [
  {
    label: "UBO Type",
    onClick: () => {},
  },
  {
    label: "Hierarchy Level",
    onClick: () => {},
  },
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
    label: "Shareholding",
    onClick: () => {},
  },
  {
    label: "Effective Shareholding",
    onClick: () => {},
  },
  {
    label: "Relationship",
    onClick: () => {},
  },
  {
    label: "Entities in Which Shares are Held",
    onClick: () => {},
  },
  {
    label: "Screening",
    onClick: () => {},
  },
];

const FAKE_DATA = [
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
  {
    uboType: "P",
    hierarchyLevel: "1",
    name: {
      label: "Bryan Low",
      onClick: () => {},
      isTextButton: true,
    },
    idType: "NRIC",
    idNo: "9202201103003",
    shareholding: "5.00%",
    effectiveSharehlding: "5.00%",
    relationship: "Director, Shareholder",
    shares: "AeroGuardians SDN BHD",
    screening: "Yes",
  },
];
