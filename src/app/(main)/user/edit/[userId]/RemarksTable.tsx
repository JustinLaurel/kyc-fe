"use client";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import dayjs from "dayjs";

interface RemarksTableProps {}
export default function RemarksTable(props: RemarksTableProps) {

  async function postUpdateUser() {

  }
  
  return (
    <Card
      header={"Review"}
      subheader={"List of Remark(s)"}
      buttons={[
        {
          label: "Cancel",
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
          onClick: () => {},
        },
        {
          label: "Update",
          onClick: () => {},
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
            label: "From",
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
