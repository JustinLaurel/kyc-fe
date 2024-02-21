import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import { UseFormReturn } from "react-hook-form";
import { INITIAL_ADD_FORM } from ".";
import FieldTextArea from "@/components/FieldTextArea";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { useRouter } from "next/navigation";

interface RemarksTableProps {
  formHook: UseFormReturn<typeof INITIAL_ADD_FORM, any, undefined>;
}
export default function RemarksTable(props: RemarksTableProps) {
  const { formHook } = props;
  const { register, control } = formHook;
  const router = useRouter();
  const dataItems = [
    {
      no: "1",
      remark: "Wrong Department/Branch",
      approverName: "Dominic Lau Yee Feng",
      timestamp: "22/08/2023 10:00:00 AM",
    },
  ];

  return (
    <Card
      header={"Review"}
      buttons={[
        {
          label: "Cancel",
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
          onClick: () => router.back(),
        },
        {
          label: "Reject",
          onClick: () => {},
        },
        {
          label: "Approve",
          onClick: () => {},
        },
      ]}
      subheader={"List of Remark(s)"}
      subchildren={[
        <FieldTextArea
          key={1}
          control={control}
          label={"Remarks"}
          {...register("remark")}
          onEnterPress={() => console.log(formHook.getValues())}
        />,
      ]}
    >
      {dataItems && dataItems.length > 0 && (
        <DataTable
          headers={[
            "No",
            { label: "Remark", onClick: () => {} },
            { label: "RM Approver Name", onClick: () => {} },
            { label: "Timestamp", onClick: () => {} },
          ]}
          items={dataItems}
          colWidths={[1, 28, 10, 10]}
        />
      )}
    </Card>
  );
}
