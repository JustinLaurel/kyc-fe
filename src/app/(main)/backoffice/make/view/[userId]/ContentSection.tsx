"use client";
import Loader from "@/components/Loader";
import MessageModal from "@/components/MessageModal";
import UserDetailsView from "./UserDetailsView";
import RemarksTable from "./RemarksTable";
import { ListItem, SimpleStaff } from "@/config/types";
import styles from "./page.module.scss";
import { useState } from "react";
import { MODAL_TYPE, MessageManager } from "@/components/MessageModal/type";
import { getClient } from "@/services/clientApi";
import { routes } from "@/config/routes";
import { useForm } from "react-hook-form";

export const INITIAL_VIEW_FORM = {
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
  const [isLoading, setIsLoading] = useState(false);
  const [messageModal, setMessageModal] = useState<MessageManager | null>(null);
  const [currentStaff, setCurrentStaff] = useState<SimpleStaff | null>(staff);

  const formHook = useForm<typeof INITIAL_VIEW_FORM>({
    defaultValues: {
      ...currentStaff,
    },
  });
  const { getValues } = formHook;

  async function handleSearch() {
    const userId = getValues().userId;
    try {
      setIsLoading(true);
      const staff = await getClient(
        routes.getStaffSimple.replace("{USER_ID}", userId)
      );
      if (staff) {
        setCurrentStaff(staff);
        formHook.reset(staff);
      } else {
        setMessageModal({
          type: MODAL_TYPE.OK,
          handleOk: () => setMessageModal(null),
          message: "User not found",
          handleClose: () => setMessageModal(null),
        });
      }
    } catch (error: any) {
      console.log(`error`, error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={styles.cardsSection}>
      <Loader isLoading={isLoading} />
      <MessageModal {...messageModal} />
      <UserDetailsView
        departmentList={departmentList}
        roleList={roleList}
        approverGroupList={approverGroupList}
        formHook={formHook}
        handleSearch={handleSearch}
      />
      <RemarksTable />
    </section>
  );
}
