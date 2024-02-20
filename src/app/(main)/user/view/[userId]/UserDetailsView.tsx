"use client";
import { useForm } from "react-hook-form";
import FieldInput from "@/components/FieldInput";
import FieldDropdown from "@/components/FieldDropdown";
import Card from "@/components/Card";
import styles from "./page.module.scss";
import { ListItem, SimpleStaff } from "@/config/types";

const INITIAL_VIEW_FORM = {
  userId: "",
  name: "",
  email: "",
  department: "",
  role: "",
  approverGroup: "",
};
interface UserDetailsProps {
  staff: SimpleStaff;
  departmentList: ListItem[];
  roleList: ListItem[];
  approverGroupList: ListItem[];
}
export default function UserDetailsView(props: UserDetailsProps) {
  const { staff, departmentList, roleList, approverGroupList } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    reset,
    control,
  } = useForm<typeof INITIAL_VIEW_FORM>({
    defaultValues: { ...staff },
  });

  return (
    <Card header={"User Details"} className={styles.userDetailsContainer}>
      <div className={styles.detailsWrapper}>
        <FieldInput
          label={"User ID*"}
          onButtonClick={() => {}}
          buttonLabel={"Search"}
          placeholder={"Enter User ID here"}
          {...register("userId")}
        />
        <FieldDropdown
          items={departmentList}
          title={"Department/Branch*"}
          placeholder={"Please Select"}
          control={control}
          {...register("department")}
        />
        <FieldInput
          label={"Name*"}
          placeholder={"Enter Name here"}
          {...register("name")}
        />
        <FieldDropdown
          items={roleList}
          title={"User Role*"}
          placeholder={"Please Select"}
          control={control}
          {...register("role")}
        />
        <FieldInput
          label={"Email ID*"}
          placeholder={"Enter Email ID here"}
          {...register("email")}
        />
        <FieldDropdown
          title={"Approver Group*"}
          items={approverGroupList}
          placeholder={"Please Select"}
          control={control}
          {...register("approverGroup")}
        />
      </div>
    </Card>
  );
}
