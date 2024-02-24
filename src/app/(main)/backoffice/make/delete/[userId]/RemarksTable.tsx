"use client";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

interface RemarksTableProps {
  handleDelete: () => void;
}
export default function RemarksTable(props: RemarksTableProps) {
  const { handleDelete } = props;
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <Card
      header={"Review"}
      subheader={"List of Remark(s)"}
      buttons={[
        {
          label: "Back",
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
          onClick: handleBack,
        },
        {
          label: "Delete",
          onClick: handleDelete,
        },
      ]}
    >
      <DataTable
        items={[
          {
            remarks: "Remarks from row 1",
            from: "Chiew Weng Keat",
            timestamp: dayjs().subtract(2, "day").format("DD/MM/YYYY"),
          },
          {
            remarks: "Second remarks row",
            from: "Teo Tan Siang",
            timestamp: dayjs().subtract(5, "day").format("DD/MM/YYYY"),
          },
          {
            remarks: "Third remarks row",
            from: "Fu Suan Huang",
            timestamp: dayjs().subtract(6, "day").format("DD/MM/YYYY"),
          },
        ]}
        headers={[
          {
            label: "Remarks",
            onClick: () => {},
          },
          {
            label: "RM Approver Name",
            onClick: () => {},
          },
          {
            label: "Timestamp",
            onClick: () => {},
          },
        ]}
        colWidths={[28, 10, 10]}
      />
    </Card>
  );
}
