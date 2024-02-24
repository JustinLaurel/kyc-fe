"use client";
import Modal from "@/components/Modal";
import styles from "./index.module.scss";
import Card from "@/components/Card";
import FieldAutocomplete from "@/components/FieldAutocomplete";
import { useForm } from "react-hook-form";

interface UboDetailsViewerModalProps {
  handleClose: () => void;
  data: Record<string, any>;
}
export default function UboDetailsViewerModal(
  props: UboDetailsViewerModalProps
) {
  const { handleClose, data } = props;

  const { control, register } = useForm({ defaultValues: data });

  return (
    // <Modal isOpen={true} handleClose={handleClose}>
    //   <Card header={"UBO Details"}>
    //     <FieldAutocomplete
    //       {...register("")}
    //     />
    //   </Card>
    // </Modal>
    <></>
  );
}

export interface UboDetailData {
  
}