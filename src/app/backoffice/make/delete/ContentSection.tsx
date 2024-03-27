import Loader from "@/components/Loader";
import MessageModal from "@/components/MessageModal";
import UserDetailsView from "./UserDetailsView";
import RemarksTable from "./RemarksTable";
import { ListItem, SimpleStaff } from "@/config/types";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { MODAL_TYPE, MessageManager } from "@/components/MessageModal/type";
import { get, post } from "@/services/api";
import { routes } from "@/config/routes";
import { useForm } from "react-hook-form";
import { BadRequestException } from "@/config/errors";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const formHook = useForm<typeof INITIAL_VIEW_FORM>({
    defaultValues: {
      ...currentStaff,
    },
  });
  const { getValues } = formHook;

  useEffect(() => {
    if (!staff) {
      setMessageModal({
        type: MODAL_TYPE.OK,
        handleOk: () => navigate(-1),
        message: "User does not exist",
        handleClose: () => navigate(-1),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, staff]); // From Server Component: Will never change

  async function handleSearch() {
    const userId = getValues().userId;
    try {
      setIsLoading(true);
      const staff = await get(
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

  async function handleDelete() {
    const userId = getValues().userId;
    try {
      setIsLoading(true);
      const response = await post(routes.submitDeleteStaff, { userId });
      if (response) {
        setMessageModal({
          type: MODAL_TYPE.OK,
          handleOk: () => navigate(-1),
          message: "User deleted successfully",
          handleClose: () => navigate(-1),
        });
      }
    } catch (error: any) {
      if (error instanceof BadRequestException) {
        setMessageModal({
          type: MODAL_TYPE.OK,
          handleOk: () => setMessageModal(null),
          message: "User does not exist",
          handleClose: () => setMessageModal(null),
        });
      }
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
      <RemarksTable handleDelete={handleDelete} />
    </section>
  );
}
