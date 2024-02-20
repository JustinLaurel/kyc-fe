"use client";
import { UseFormReturn } from "react-hook-form";
import FieldInput from "@/components/FieldInput";
import FieldDropdown from "@/components/FieldDropdown";
import Card from "@/components/Card";
import styles from "./page.module.scss";
import { ListItem } from "@/config/types";
import { INITIAL_VIEW_FORM } from "./ContentSection";

interface UserDetailsProps {
  departmentList: ListItem[];
  roleList: ListItem[];
  approverGroupList: ListItem[];
  formHook: UseFormReturn<typeof INITIAL_VIEW_FORM, any, undefined>;
  handleSearch: () => void;
}
export default function UserDetailsView(props: UserDetailsProps) {
  const { departmentList, roleList, approverGroupList, formHook, handleSearch } = props;
  const {register, control} = formHook;

  return (
    <Card header={"User Details"} className={styles.userDetailsContainer}>
      <div className={styles.detailsWrapper}>
        <FieldInput
          label={"User ID*"}
          onButtonClick={handleSearch}
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
