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
import MessageModal from "@/components/MessageModal";
import { MODAL_TYPE, MessageManager } from "@/components/MessageModal/type";
import Loader from "@/components/Loader";
import { ListItem, SimpleStaff } from "@/config/types";

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

interface AddViewProps {
  departmentList: ListItem[];
  approverGroupList: ListItem[];
  roleList: ListItem[];
  staff: SimpleStaff | null;
}
export default function AddView(props: AddViewProps) {
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

  async function handleClickSubmit() {
    const isValidateSuccessful = await trigger();
    if (isValidateSuccessful) {
      setMessageModal({
        type: MODAL_TYPE.CANCEL_CONFIRM,
        isOpen: true,
        message: "Are you sure to submit this application?",
        handleClose: () => setMessageModal(null),
        handleCancel: () => setMessageModal(null),
        handleConfirm: handleSubmit(submitUser),
      });
    }
  }

  async function submitUser(data: typeof INITIAL_ADD_FORM) {
    setMessageModal(null);
    setIsLoading(true);
    try {
      await postClient(routes.submitAddStaff, data);
      setMessageModal({
        type: MODAL_TYPE.OK,
        isOpen: true,
        message: "User successfully created!",
        handleClose: () => setMessageModal(null),
        handleOk: () => setMessageModal(null),
      });
      clearForm();
    } catch (error: any) {
      setMessageModal({
        type: MODAL_TYPE.OK,
        isOpen: true,
        message:
          error.message === "Staff ID already exists"
            ? "User already exists in the system. Please enter a new User ID"
            : "Failed to create user: " + error.message,
        handleClose: () => setMessageModal(null),
        handleOk: () => setMessageModal(null),
      });
    } finally {
      setIsLoading(false);
    }
  }

  function clearForm() {
    reset({ ...INITIAL_ADD_FORM });
  }

  async function handleClickSearch() {
    const isValidStaffId = await trigger("userId");
    if (isValidStaffId) {
      const staffData = await getClient(
        routes.getStaffSimple.replace("{STAFF_ID}", getValues("userId"))
      );
      const modal = {
        type: MODAL_TYPE.OK as const,
        isOpen: true,
        handleClose: () => setMessageModal(null),
        handleOk: () => setMessageModal(null),
      };
      if (staffData?.userId) {
        setMessageModal({
          ...modal,
          message: "This User ID exists in the system.",
        });
      } else {
        setMessageModal({
          ...modal,
          message: "This User ID does not exist in the system.",
        });
      }
    }
  }

  return (
    <Card
      header={"User Details"}
      className={styles.addView}
      buttons={[
        {
          label: "Cancel",
          // onClick: () => router.back(),
          onClick: () => clearForm(),
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
        },
        {
          label: "Submit",
          onClick: handleClickSubmit,
        },
      ]}
    >
      <Loader isLoading={isLoading} />
      <MessageModal {...messageModal} />
      <div className={styles.addWrapper}>
        <FieldInput
          label={"User ID*"}
          onButtonClick={() => handleClickSearch()}
          buttonLabel={"Search"}
          placeholder={"Enter User ID here"}
          error={errors.userId}
          {...register("userId", VALIDATION_RULES.userId)}
        />
        <FieldDropdown
          items={departmentList}
          title={"Department/Branch*"}
          placeholder={"Please Select"}
          error={errors.department}
          name={"department"}
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
          title={"User Role*"}
          placeholder={"Please Select"}
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
          title={"Approver Group*"}
          items={approverGroupList}
          placeholder={"Please Select"}
          error={errors.approverGroup}
          control={control}
          {...register("approverGroup", VALIDATION_RULES.approverGroup)}
        />
      </div>
    </Card>
  );
}
