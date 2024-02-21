"use client";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

interface RemarksTableProps {}
export default function RemarksTable(props: RemarksTableProps) {
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
      ]}
    >
      <DataTable
        items={[
          {
            no: "1",
            remarks: "Remarks from row 1",
            from: "Chiew Weng Keat",
            timestamp: dayjs().subtract(2, "day").format("DD/MM/YYYY"),
          },
          {
            no: "2",
            remarks: "Second remarks row",
            from: "Teo Tan Siang",
            timestamp: dayjs().subtract(5, "day").format("DD/MM/YYYY"),
          },
          {
            no: "3",
            remarks: "Third remarks row",
            from: "Fu Suan Huang",
            timestamp: dayjs().subtract(6, "day").format("DD/MM/YYYY"),
          },
        ]}
        headers={[
          "No",
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
        colWidths={[1, 28, 10, 10]}
      />
    </Card>
  );
}
