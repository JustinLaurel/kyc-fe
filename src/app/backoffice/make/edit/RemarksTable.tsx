import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

interface RemarksTableProps {
  handleSubmitEdit: () => void;
}
export default function RemarksTable(props: RemarksTableProps) {
  const { handleSubmitEdit } = props;
  const navigate = useNavigate();

  return (
    <Card
      header={"Review"}
      subheader={"List of Remark(s)"}
      buttons={[
        {
          label: "Cancel",
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
          onClick: () => navigate(-1),
        },
        {
          label: "Update",
          onClick: handleSubmitEdit,
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
