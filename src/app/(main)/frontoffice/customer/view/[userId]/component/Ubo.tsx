"use client";
import Card from "@/components/Card";
import styles from "./ubo.module.scss";
import DataTable from "@/components/DataTable";
import { useRouter } from "next/navigation";

export default function Ubo() {
  const router = useRouter();
  function tempRouteHandler() {
    router.push("audit/202005123461");
  }
  const FAKE_DATA = [
    {
      uboType: "P",
      hierarchyLevel: "1",
      name: {
        label: "Bryan Low",
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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
        onClick: tempRouteHandler,
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

  return (
    <Card
      header={"UBO Details"}
      subheader={"List of UBO(s)"}
      headerButton={{
        label: "Add",
        onClick: tempRouteHandler,
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
