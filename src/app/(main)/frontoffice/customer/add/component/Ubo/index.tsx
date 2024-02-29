"use client";
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import FieldInput from "@/components/FieldInput";
import Modal from "@/components/Modal";
import StyledFieldContainer from "@/components/StyledFieldContainer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./index.module.scss";

export default function Ubo() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(true);
  function handleClickName() {
    setIsDetailsModalOpen(true);
  }
  const FAKE_DATA = [
    {
      uboType: "P",
      hierarchyLevel: "1",
      name: {
        label: "Bryan Low",
        onClick: handleClickName,
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
        onClick: handleClickName,
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
        onClick: handleClickName,
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
        onClick: handleClickName,
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
        onClick: handleClickName,
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
        onClick: handleClickName,
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
        onClick: handleClickName,
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
        onClick: handleClickName,
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
        onClick: handleClickName,
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
        onClick: handleClickName,
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
      header={"UBO"}
      subheader={"List of UBO(s)"}
      headerButton={{
        label: "Add",
        onClick: () => {},
      }}
    >
      <Modal
        isOpen={isDetailsModalOpen}
        handleClose={() => setIsDetailsModalOpen(false)}
        className={styles.uboModal}
      >
        <Card header={"UBO Details"}>
          <StyledFieldContainer>
            <FieldInput label={"UBO Type*"} value={"C-Corporate"} />
            <FieldAutocomplete
              label={"Entity in Which Shares are Held*"}
              value={"AeroGuardians SDN BHD"}
            />
          </StyledFieldContainer>
        </Card>
      </Modal>
      <DataTable
        items={FAKE_DATA}
        headers={HEADERS}
        colWidths={[68, 104, 88, 68, 128, 128, 128, 122, 110, 104]}
        config={{
          uniformRowColor: true,
        }}
        rowConfig={[
          {
            rowIndex: 1,
            isHighlighted: true,
          },
        ]}
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
