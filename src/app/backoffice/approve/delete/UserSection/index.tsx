import { useState } from "react";
import AddView from "./DetailsView";
import { ListItem, SimpleStaff } from "@/config/types";
import RemarksTable from "./RemarksTable";
import { useForm } from "react-hook-form";

export const INITIAL_ADD_FORM = {
  remark: "",
};
interface UserSectionProps {
  staff: SimpleStaff;
  departmentList: ListItem[];
  approverGroupList: ListItem[];
  roleList: ListItem[];
}
export default function UserSection(props: UserSectionProps) {
  const { staff, departmentList, approverGroupList, roleList } = props;
  const [queriedStaff, setQueriedStaff] = useState(staff);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    reset,
    control,
  } = useForm<typeof INITIAL_ADD_FORM>({
    defaultValues: { ...INITIAL_ADD_FORM },
  });
  const formHook = useForm<typeof INITIAL_ADD_FORM>({
    defaultValues: { ...INITIAL_ADD_FORM },
  });

  return (
    <>
      <AddView
        departmentList={departmentList}
        approverGroupList={approverGroupList}
        roleList={roleList}
        staff={queriedStaff}
      />
      <RemarksTable formHook={formHook} />
    </>
  );
}
