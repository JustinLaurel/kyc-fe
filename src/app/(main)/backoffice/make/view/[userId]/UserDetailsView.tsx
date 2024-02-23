"use client";
import { UseFormReturn } from "react-hook-form";
import FieldInput from "@/components/FieldInput";
import FieldDropdown from "@/components/FieldDropdown";
import Card from "@/components/Card";
import styles from "./page.module.scss";
import { ListItem } from "@/config/types";
import { INITIAL_VIEW_FORM } from "./ContentSection";
import StyledFieldContainer from "@/components/StyledFieldContainer";

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
      <StyledFieldContainer>
        <FieldInput
          label={"User ID*"}
          onButtonClick={handleSearch}
          buttonLabel={"Search"}
          placeholder={"Enter User ID here"}
          {...register("userId")}
        />
        <FieldDropdown
          items={departmentList}
          label={"Department/Branch*"}
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
          label={"User Role*"}
          control={control}
          {...register("role")}
        />
        <FieldInput
          label={"Email ID*"}
          placeholder={"Enter Email ID here"}
          {...register("email")}
        />
        <FieldDropdown
          label={"Approver Group*"}
          items={approverGroupList}
          control={control}
          {...register("approverGroup")}
        />
      </StyledFieldContainer>
    </Card>
  );
}
