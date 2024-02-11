"use client";
import Card from "@/components/Card";
import styles from "./index.module.scss";
import FieldInput from "@/components/FieldInput";
import { useState } from "react";
import FieldDropdown from "@/components/FieldDropdown";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { useRouter } from "next/navigation";
import { getClient, postClient } from "@/services/clientApi";
import { routes } from "@/config/routes";
import { useForm } from "react-hook-form";

export const INITIAL_ADD_FORM = {
  staffId: "",
  name: "",
  email: "",
  department: "",
  role: "",
  approverGroup: "",
};
const VALIDATION_RULES = {
  staffId: {
    required: true,
    minLength: 5,
  },
  name: {
    required: true,
    minLength: 6,
  },
  email: {
    required: true,
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Please enter a valid email address",
    },
  },
  department: {
    required: true,
  },
  role: {
    required: true,
  },
  approverGroup: {
    required: true,
  },
}

interface AddViewProps {
  departmentList: ListItem[];
  approverGroupList: ListItem[];
  staff: SimpleStaff | null;
}
export default function AddView(props: AddViewProps) {
  const { departmentList, approverGroupList, staff } = props;
  const router = useRouter();

  const { register, handleSubmit } = useForm<typeof INITIAL_ADD_FORM>({
    defaultValues: {
      ...(staff ? staff : INITIAL_ADD_FORM),
    },
  });

  return (
    <Card
      header={"User Details"}
      className={styles.addView}
      buttons={[
        {
          label: "Cancel",
          onClick: () => router.back(),
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
        },
        {
          label: "Submit",
          onClick: () => {},
        },
      ]}
    >
      <div className={styles.addWrapper}>
        <FieldInput
          label={"User ID*"}
          onButtonClick={() => {}}
          buttonLabel={"Search"}
          placeholder={"Enter User ID here"}
          {...register("staffId", VALIDATION_RULES.staffId)}
        />
        <FieldDropdown
          items={departmentList}
          title={"Department/Branch*"}
          placeholder={"Please Select"}
          
        />
        <FieldInput label={"Name*"} placeholder={"Enter Name here"} />
        <FieldDropdown
          items={[
            {
              label: "Role 1",
              value: "role1",
            },
            {
              label: "Role 2",
              value: "role2",
            },
          ]}
          title={"User Role*"}
          placeholder={"Please Select"}
        />
        <FieldInput label={"Email ID*"} placeholder={"Enter Email ID here"} />
        <FieldDropdown
          title={"Approver Group*"}
          items={approverGroupList}
          placeholder={"Please Select"}
        />
      </div>
    </Card>
  );
}
