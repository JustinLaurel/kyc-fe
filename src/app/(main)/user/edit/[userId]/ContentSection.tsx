"use client";
import { ListItem, SimpleStaff } from "@/config/types";
import UserDetailsView from "./UserDetailsView";
import styles from "./page.module.scss";
import RemarksTable from "./RemarksTable";
import { useForm } from "react-hook-form";
import { postClient } from "@/services/clientApi";
import { routes } from "@/config/routes";
import MessageModal from "@/components/MessageModal";
import { useState } from "react";
import Loader from "@/components/Loader";
import { MODAL_TYPE, MessageManager } from "@/components/MessageModal/type";

const INITIAL_EDIT_FORM = {
  userId: "",
  name: "",
  email: "",
  department: "",
  role: "",
  approverGroup: "",
};

interface ContentSectionProps {
  staff: SimpleStaff;
  departmentList: ListItem[];
  roleList: ListItem[];
  approverGroupList: ListItem[];
}
export default function ContentSection(props: ContentSectionProps) {
  const { staff, departmentList, roleList, approverGroupList } = props;
  const formHook = useForm<typeof INITIAL_EDIT_FORM>({
    defaultValues: {
      ...staff,
    },
  });
  const { handleSubmit, getValues } = formHook;

  const [isLoading, setIsLoading] = useState(false);
  const [messageModal, setMessageModal] = useState<MessageManager | null>(null);

  async function submitEditStaff() {
    const values = getValues();
    try {
      setIsLoading(true);
      const updatedStaff = await postClient(routes.submitEditStaff, values);
      if (updatedStaff.userId) {
        setMessageModal({
          type: MODAL_TYPE.OK,
          handleOk: () => setMessageModal(null),
          message: "Staff successfully updated!",
          handleClose: () => setMessageModal(null),
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={styles.cardsSection}>
      <Loader isLoading={isLoading} />
      <MessageModal {...messageModal} />
      <UserDetailsView
        staff={staff}
        departmentList={departmentList}
        roleList={roleList}
        approverGroupList={approverGroupList}
      />
      <RemarksTable handleSubmitEdit={handleSubmit(submitEditStaff)} />
    </section>
  );
}
