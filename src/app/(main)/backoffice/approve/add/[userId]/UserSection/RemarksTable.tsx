import Card from "@/components/Card";
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
          label: "Send Back to Submitter",
          onClick: () => {},
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
    >
      <FieldTextArea
          control={control}
          label={"Remarks"}
          {...register("remark")}
          onEnterPress={() => console.log(formHook.getValues())}
          characterCount
        />
    </Card>
  );
}
