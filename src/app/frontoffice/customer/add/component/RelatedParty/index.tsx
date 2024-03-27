import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import { startTransition, useMemo, useState } from "react";
import CorporateDetailsModal from "./CorporateDetailsModal";
import IndividualDetailsModal from "./IndividualDetailsModal";
import styles from "./index.module.scss";

export default function RelatedParty() {
  const [isCorporateDetailsOpen, setIsCorporateDetailsOpen] = useState(false);
  const [isIndividualDetailsOpen, setIsIndividualDetailsOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  function handleClickCorporateName() {
    startTransition(() => setIsCorporateDetailsOpen(true));
  }
  function handleClickIndividualName() {
    startTransition(() => setIsIndividualDetailsOpen(true));
  }

  const FAKE_DATA = useMemo(() => [
    {
      uboType: "P",
      hierarchyLevel: "1",
      name: {
        label: "XYZ Sdn Bhd",
        onClick: handleClickCorporateName,
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
        onClick: handleClickIndividualName,
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
        label: "XYZ Sdn Bhd",
        onClick: handleClickCorporateName,
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
        onClick: handleClickIndividualName,
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
        label: "XYZ Sdn Bhd",
        onClick: handleClickCorporateName,
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
        onClick: handleClickIndividualName,
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
        label: "XYZ Sdn Bhd",
        onClick: handleClickCorporateName,
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
        label: "XYZ Sdn Bhd",
        onClick: handleClickCorporateName,
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
        onClick: handleClickIndividualName,
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
        label: "XYZ Sdn Bhd",
        onClick: handleClickCorporateName,
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
  ], []);

  const tableConfig = useMemo(() => {
    return {
      colWidths: [68, 104, 88, 68, 128, 128, 128, 122, 110, 104],
      config: {
        uniformRowColor: true,
      },
      rowConfig: [
        {
          rowIndex: 1,
          isHighlighted: true,
        },
      ]
    }
  }, []);

  return (
    <Card
      header={"Related Party Details"}
      subheader={"List of Related Party"}
      headerButton={{
        label: "Add",
        onClick: () => {},
      }}
    >
      <CorporateDetailsModal
        isOpen={isCorporateDetailsOpen}
        handleClose={() => setIsCorporateDetailsOpen(false)}
      />
      <IndividualDetailsModal
        isOpen={isIndividualDetailsOpen}
        handleClose={() => setIsIndividualDetailsOpen(false)}
      />
      <DataTable
        items={FAKE_DATA}
        headers={HEADERS}
        colWidths={tableConfig.colWidths}
        config={tableConfig.config}
        rowConfig={tableConfig.rowConfig}
        width={2000}
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
