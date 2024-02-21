import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";
import { Backdrop } from "@mui/material";
import { MODAL_TYPE } from "./type";
import { isEmpty } from "@/util";
import { EmptyObject } from "react-hook-form";

interface BaseProps {
  message?: string | React.ReactNode;
  handleClose: () => void;
  header?: string;
  onKeyboardEnterPress?: () => void;
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
    buttons,
    message = "",
    handleClose,
    header = "Notification",
    onKeyboardEnterPress,
  } = props;

  const modalRef = useRef<HTMLDivElement | null>(null);

  function handleCloseModal(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) {
      // If click is on background
      handleClose();
    }
  }

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
    if (onKeyboardEnterPress) {
      const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
          onKeyboardEnterPress();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };  
    }
  }, [onKeyboardEnterPress]);

  return (
    <div className={styles.container}>
      <Backdrop
        open={true}
        className={styles.dimmingOverlay}
        onClick={handleCloseModal}
      />
      <div className={styles.wrapper} ref={modalRef} tabIndex={-1}>
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
  );
}

interface MessageModalYesNo extends BaseProps {
  type: MODAL_TYPE.YES_NO;
  handleNo: () => void;
  handleYes: () => void;
}
function MessageModalYesNo(props: MessageModalYesNo) {
  const { message, handleNo, handleYes, handleClose } = props;

  return (
    <BaseMessageModal
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
      onKeyboardEnterPress={handleYes}
    />
  );
}

interface MessageModalOk extends BaseProps {
  type: MODAL_TYPE.OK;
  handleOk: () => void;
}
function MessageModalOk(props: MessageModalOk) {
  const { message, handleOk, handleClose } = props;

  return (
    <BaseMessageModal
      buttons={[
        {
          label: "OK",
          onClick: handleOk,
          colorScheme: BUTTON_COLOR_SCHEMES.WHITE,
        },
      ]}
      handleClose={handleClose}
      message={message}
      onKeyboardEnterPress={handleOk}
    />
  );
}

interface MessageModalCancelConfirm extends BaseProps {
  type: MODAL_TYPE.CANCEL_CONFIRM;
  handleCancel: () => void;
  handleConfirm: () => void;
}
function MessageModalCancelConfirm(props: MessageModalCancelConfirm) {
  const { message, handleCancel, handleConfirm, handleClose } = props;

  return (
    <BaseMessageModal
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
      onKeyboardEnterPress={handleConfirm}
    />
  );
}

function MessageModal(
  props:
    | MessageModalYesNo
    | MessageModalOk
    | MessageModalCancelConfirm
    | EmptyObject
) {
  if (isEmpty(props)) {
    return <></>;
  } else {
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
}

export default MessageModal;
