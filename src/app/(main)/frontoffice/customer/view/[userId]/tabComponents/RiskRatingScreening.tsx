import Card from "@/components/Card";
import DataTable from "@/components/DataTable";

export default function RiskRatingScreening() {
  return (
    <Card>
      <DataTable
        items={FAKE_DATA}
        headers={[
          {
            label: "Connected Party Name",
            onClick: () => {},
          },
          {
            label: "Relationship",
            onClick: () => {},
          },
          {
            label: "Risk Rating",
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
            label: "Watchlist Flag",
            onClick: () => {},
          },
          {
            label: "PEP/PEC Flag",
            onClick: () => {},
          },
          {
            label: "Timestamp for Screening",
            onClick: () => {},
          },
        ]}
        colWidths={[208, 208, 80, 128, 128, 104, 96, 128]}
      />
    </Card>
  );
}

const FAKE_DATA = [
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
  {
    connectedPartyName: "Bryan Low",
    relationship: "Director, Shareholder, Guarantor",
    riskRating: "HD",
    shareholding: "5.00%",
    effectiveShareholding: "5.00%",
    watchlistFlag: "Y",
    pepPecFlag: "Y",
    timestampScreening: "01/05/2023 14:00",
  },
];
