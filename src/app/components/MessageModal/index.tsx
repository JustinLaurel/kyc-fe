import React from "react";
import styles from "./index.module.scss";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";
import { Backdrop } from "@mui/material";
import { MODAL_TYPE } from "./type";

interface BaseProps {
  message?: string | React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  header?: string;
}
interface MessageModalProps extends BaseProps {
  buttons?: {
    label: string;
    onClick: () => void;
    colorScheme: BUTTON_COLOR_SCHEMES;
  }[];
}
function BaseMessageModal(props: MessageModalProps) {
  const {
    isOpen,
    buttons,
    message = "",
    handleClose,
    header = "Notification",
  } = props;

  function handleCloseModal(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) {
      // If click is on background
      handleClose();
    }
  }

  return isOpen ? (
    <div className={styles.container}>
      <Backdrop
        open={isOpen}
        className={styles.dimmingOverlay}
        onClick={handleCloseModal}
      />
      <div className={styles.wrapper}>
        <section className={styles.headerSection}>{header}</section>
        <section className={styles.contentSection}>{message}</section>
        {buttons && buttons.length && (
          <section className={styles.buttonSection}>
            {buttons.map((button, index) => (
              <ActionButton
                className={styles.notificationButton}
                key={index}
                colorScheme={button.colorScheme}
                onClick={() => button.onClick()}
              >
                {button.label}
              </ActionButton>
            ))}
          </section>
        )}
      </div>
    </div>
  ) : null;
}

interface MessageModalYesNo extends BaseProps {
  type: MODAL_TYPE.YES_NO;
  handleNo: () => void;
  handleYes: () => void;
}
function MessageModalYesNo(props: MessageModalYesNo) {
  const { isOpen, message, handleNo, handleYes, handleClose } = props;

  return (
    <BaseMessageModal
      isOpen={isOpen}
      buttons={[
        {
          label: "NO",
          onClick: handleNo,
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
        {
          label: "YES",
          onClick: handleYes,
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
      ]}
      message={message}
      handleClose={handleClose}
    />
  );
}

interface MessageModalOk extends BaseProps {
  type: MODAL_TYPE.OK;
  handleOk: () => void;
}
function MessageModalOk(props: MessageModalOk) {
  const { isOpen, message, handleOk, handleClose } = props;

  return (
    <BaseMessageModal
      isOpen={isOpen}
      buttons={[
        {
          label: "OK",
          onClick: handleOk,
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
      ]}
      handleClose={handleClose}
      message={message}
    />
  );
}

interface MessageModalCancelConfirm extends BaseProps {
  type: MODAL_TYPE.CANCEL_CONFIRM;
  handleCancel: () => void;
  handleConfirm: () => void;
}
function MessageModalCancelConfirm(props: MessageModalCancelConfirm) {
  const { isOpen, message, handleCancel, handleConfirm, handleClose } = props;

  return (
    <BaseMessageModal
      isOpen={isOpen}
      buttons={[
        {
          label: "CANCEL",
          onClick: handleCancel,
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
        {
          label: "CONFIRM",
          onClick: handleConfirm,
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
      ]}
      handleClose={handleClose}
      message={message}
    />
  );
}

function MessageModal(
  props: MessageModalYesNo | MessageModalOk | MessageModalCancelConfirm
) {
  switch (props.type) {
    case MODAL_TYPE.YES_NO:
      return <MessageModalYesNo {...props} />;
    case MODAL_TYPE.OK:
      return <MessageModalOk {...props} />;
    case MODAL_TYPE.CANCEL_CONFIRM:
      return <MessageModalCancelConfirm {...props} />;
    default:
      return <></>;
  }
}

export default MessageModal;
