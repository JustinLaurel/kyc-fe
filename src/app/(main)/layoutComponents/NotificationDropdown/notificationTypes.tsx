import React from "react";
import styles from "./notificationTypes.module.scss";
import Image from "next/image";
import { formatNotificationDate } from "@/services/util";
import dayjs from "dayjs";
import TextButton from "@/components/TextButton";

interface StandardMessageProps {
  timestamp: Date;
  imageSrc?: string;
  isHighlighted?: boolean;
}

interface MentionedMessageProps extends StandardMessageProps {
  username: string;
  threadName: string;
  onClickThread: () => void;
}
export function MentionedMessage(props: MentionedMessageProps) {
  const {
    username,
    threadName,
    onClickThread,
    timestamp,
    imageSrc,
    isHighlighted,
  } = props;

  return (
    <BaseNotificationView
      timestamp={timestamp}
      imgSrc={imageSrc}
      className={styles.mentionedType}
      isHighlighted={isHighlighted}
    >
      <div>
        <b>{username}</b> mentioned you in comments in a thread{" "}
        <span className={styles.threadButton} onClick={onClickThread}>
          {threadName}
        </span>
        .
      </div>
    </BaseNotificationView>
  );
}

interface RequestMessageProps extends StandardMessageProps {
  username: string;
  action: string;
}
export function RequestMessage(props: RequestMessageProps) {
  const {
    username,
    action,
    imageSrc,
    timestamp,
    isHighlighted = false,
  } = props;

  return (
    <BaseNotificationView
      timestamp={timestamp}
      imgSrc={imageSrc}
      isHighlighted={isHighlighted}
    >
      <div>
        <b>{username}</b> requested to {action} a user.
      </div>
    </BaseNotificationView>
  );
}

interface ActionMessageProps extends StandardMessageProps {
  username: string;
  action: string;
}
export function ActionMessage(props: ActionMessageProps) {
  const {
    username,
    action,
    imageSrc,
    timestamp,
    isHighlighted = false,
  } = props;

  return (
    <BaseNotificationView
      timestamp={timestamp}
      imgSrc={imageSrc}
      isHighlighted={isHighlighted}
    >
      <div>
        <b>{username}</b> {action} a document.
      </div>
    </BaseNotificationView>
  );
}


interface BaseNotificationViewProps {
  imgSrc?: string;
  timestamp: Date;
  children: React.ReactNode;
  className?: string;
  isHighlighted?: boolean;
}
export function BaseNotificationView(props: BaseNotificationViewProps) {
  const {
    imgSrc,
    timestamp,
    children,
    className,
    isHighlighted = false,
  } = props;
  return (
    <div
      className={
        styles.baseNotificationView +
        (className ? ` ${className}` : "") +
        (isHighlighted ? ` ${styles.highlight}` : "")
      }
    >
      <section className={styles.image}>
        <Image
          src={imgSrc || "/assets/images/icon_user_active.png"}
          alt={"Notification Icon"}
          width={40}
          height={40}
        />
      </section>
      <section className={styles.content}>{children}</section>
      <section className={styles.timestamp}>
        {formatNotificationDate(timestamp)}
      </section>
    </div>
  );
}
