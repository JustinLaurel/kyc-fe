import React, { JSXElementConstructor, ReactElement } from "react";
import styles from "./index.module.scss";
import { Modal as MuiModal } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  closeOnBackdropClick?: boolean;
}
export default function Modal(props: ModalProps) {
  const { isOpen, handleClose, children, closeOnBackdropClick = false } = props;

  return (
    <MuiModal
      open={isOpen}
      onClose={(_, reason) => {
        if (reason === "backdropClick" && !closeOnBackdropClick) {
          return;
        }
        handleClose();
      }}
      className={styles.mainContainer}
    >
      <main className={styles.contentWrapper}>{children}</main>
    </MuiModal>
  );
}
