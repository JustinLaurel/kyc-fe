
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import { AuditRow } from "../type";

interface AuditListingTableProps {
  data: AuditRow[];
}
export default function AuditListingTable(props: AuditListingTableProps) {
  const { data } = props;
  return (
    <Card
      header={"Search Result"}
      headerButton={{
        label: "Download",
        onClick: () => {},
      }}
    >
      <DataTable
        items={data}
        headers={[
          {
            label: "Timestamp",
            onClick: () => {},
          },
          {
            label: "Performed By",
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
