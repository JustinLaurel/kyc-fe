"use client";
import Card from "@/components/Card";
import styles from "./index.module.scss";
import FieldInput from "@/components/FieldInput";
import { useState } from "react";
import FieldDropdown from "@/components/FieldDropdown";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import MessageModal from "@/components/MessageModal";
import { MessageManager } from "@/components/MessageModal/type";
import Loader from "@/components/Loader";
import { ListItem, SimpleStaff } from "@/config/types";
import StyledFieldContainer from "@/components/StyledFieldContainer";

export const INITIAL_ADD_FORM = {
  userId: "",
  name: "",
  email: "",
  department: "",
  role: "",
  approverGroup: "",
};
const VALIDATION_RULES = {
  userId: {
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
};

interface DetailsViewProps {
  departmentList: ListItem[];
  approverGroupList: ListItem[];
  roleList: ListItem[];
  staff: SimpleStaff | null;
}
export default function DetailsView(props: DetailsViewProps) {
  const { departmentList, approverGroupList, roleList, staff } = props;
  const router = useRouter();
  const [messageModal, setMessageModal] = useState<MessageManager | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    reset,
    control
  } = useForm<typeof INITIAL_ADD_FORM>({
    defaultValues: {
      ...(staff ? staff : INITIAL_ADD_FORM),
    },
  });

  return (
    <Card
      header={"Review User"}
      className={styles.addView}
    >
      <Loader isLoading={isLoading} />
      <MessageModal {...messageModal} />
      <StyledFieldContainer>
        <FieldInput
          label={"User ID*"}
          buttonLabel={"Search"}
          placeholder={"Enter User ID here"}
          error={errors.userId}
          {...register("userId", VALIDATION_RULES.userId)}
        />
        <FieldDropdown
          items={departmentList}
          label={"Department/Branch*"}
          error={errors.department}
          {...register("department")}
          control={control}
        />
        <FieldInput
          label={"Name*"}
          placeholder={"Enter Name here"}
          error={errors.name}
          {...register("name", VALIDATION_RULES.name)}
        />
        <FieldDropdown
          items={roleList}
          label={"User Role*"}
          error={errors.role}
          control={control}
          {...register("role", VALIDATION_RULES.role)}
        />
        <FieldInput
          label={"Email ID*"}
          placeholder={"Enter Email ID here"}
          error={errors.email}
          {...register("email", VALIDATION_RULES.email)}
        />
        <FieldDropdown
          label={"Approver Group*"}
          items={approverGroupList}
          error={errors.approverGroup}
          control={control}
          {...register("approverGroup", VALIDATION_RULES.approverGroup)}
        />
      </StyledFieldContainer>
    </Card>
  );
}
