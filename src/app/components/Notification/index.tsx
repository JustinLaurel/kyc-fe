import React from "react";
import styles from "./index.module.scss";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";

interface NotificationProps {
  children?: React.ReactNode;
  isOpen: boolean;
  closeNotification: () => void;
  buttons?: {
    label: string;
    onClick: () => void;
    colorScheme: BUTTON_COLOR_SCHEMES;
  }[];
  header?: string;
}
export default function Notification(props: NotificationProps) {
  const {
    isOpen,
    buttons,
    closeNotification,
    header = "Notification",
  } = props;

  function handleCloseNotification(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) {
      // If click is on background
      closeNotification();
    }
  }

  return isOpen ? (
    <div
      className={styles.container}
      onClick={(event) => handleCloseNotification(event)}
    >
      <div className={styles.wrapper}>
        <section className={styles.headerSection}>{header}</section>
        <section className={styles.contentSection}>{props.children}</section>
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
