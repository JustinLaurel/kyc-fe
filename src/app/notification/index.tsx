
import styles from "./index.module.scss";
import { Card, TextButton } from "@/components/index";
import {
  ActionMessage,
  MentionedMessage,
  RequestMessage,
} from "../layoutComponents/NotificationDropdown/notificationTypes";
import dayjs from "dayjs";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { useNavigate } from "react-router-dom";

export default function Notification() {
  const navigate = useNavigate();
  return (
    <Card
      header={<Header handleMarkAsRead={() => {}} />}
      buttons={[
        {
          label: "Back",
          colorScheme: BUTTON_COLOR_SCHEMES.GREY,
          onClick: () => navigate(-1),
        },
      ]}
    >
      <div className={styles.notificationContainer}>
        <MentionedMessage
          timestamp={dayjs().subtract(2, "minute").toDate()}
          isHighlighted={true}
          username={"Sara Jhonsan"}
          threadName={"Project List"}
          onClickThread={() => {}}
        />
        <MentionedMessage
          timestamp={dayjs().subtract(23, "minute").toDate()}
          isHighlighted={true}
          username={"Chiew Weng Keat"}
          threadName={"User Group"}
          onClickThread={() => {}}
        />
        <RequestMessage
          timestamp={dayjs().subtract(2, "hour").toDate()}
          username={"Fu Suan Huang"}
          action={"delete"}
        />
        <ActionMessage
          timestamp={dayjs().subtract(1, "day").toDate()}
          username={"Teo Tan Siang"}
          action={"uploaded"}
        />
        <MentionedMessage
          timestamp={dayjs().subtract(5, "day").toDate()}
          isHighlighted={true}
          username={"Sara Jhonsan"}
          threadName={"Project List"}
          onClickThread={() => {}}
        />
      </div>
    </Card>
  );
}

interface HeaderProps {
  handleMarkAsRead: () => void;
}
function Header(props: HeaderProps) {
  const { handleMarkAsRead } = props;
  return (
    <div className={styles.headerContainer}>
      <div>Notifications</div>
      <TextButton onClick={handleMarkAsRead} className={styles.markButton}>
        Mark all as read
      </TextButton>
    </div>
  );
}
