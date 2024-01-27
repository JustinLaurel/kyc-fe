import React from "react";
import styles from "./index.module.scss";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";

interface BaseMessageModalProps {
  message?: string | React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  header?: string;
}
interface Props extends BaseMessageModalProps {
  buttons?: {
    label: string;
    onClick: () => void;
    colorScheme: BUTTON_COLOR_SCHEMES;
  }[];
}
function MessageModal(props: Props) {
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
    <div
      className={styles.container}
      onClick={(event) => handleCloseModal(event)}
    >
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

interface MessageModalYesNo extends BaseMessageModalProps {
  handleNo: () => void;
  handleYes: () => void;
}
function MessageModalYesNo(props: MessageModalYesNo) {
  const { isOpen, message, handleNo, handleYes, handleClose } = props;

  return (
    <MessageModal
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

interface MessageModalOk extends BaseMessageModalProps {
  handleOk: () => void;
}
function MessageModalOk(props: MessageModalOk) {
  const { isOpen, message, handleOk, handleClose } = props;

  return (
    <MessageModal
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

interface MessageModalCancelConfirm extends BaseMessageModalProps {
  handleCancel: () => void;
  handleConfirm: () => void;
}
function MessageModalCancelConfirm(props: MessageModalCancelConfirm) {
  const { isOpen, message, handleCancel, handleConfirm, handleClose } = props;

  return (
    <MessageModal
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

export {
  MessageModal,
  MessageModalYesNo,
  MessageModalOk,
  MessageModalCancelConfirm,
}