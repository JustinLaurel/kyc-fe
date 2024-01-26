import styles from "./index.module.scss";
import TextButton from "@/components/TextButton";
import { Button, ClickAwayListener, Fade, Popper } from "@mui/material";
import {
  ActionMessage,
  MentionedMessage,
  RequestMessage,
} from "./notificationTypes";
import dayjs from "dayjs";

interface NotificationDropdownProps {
  isOpen: boolean;
  handleClose: () => void;
  anchorElement: HTMLElement | null;
}
export default function NotificationDropdown(props: NotificationDropdownProps) {
  const { isOpen, handleClose, anchorElement } = props;
  return isOpen && Boolean(anchorElement) ? (
    <Popper
      open={isOpen}
      anchorEl={anchorElement ?? null}
      transition
      placement={"bottom-end"}
    >
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={handleClose}>
          <Fade {...TransitionProps}>
            <div className={styles.container}>
              <section className={styles.headerSection}>
                <div className={styles.header}>Notifications</div>
                <TextButton className={styles.mark} onClick={() => {}}>
                  Mark all as read
                </TextButton>
              </section>
              <section className={styles.notificationSection}>
                <MentionedMessage
                  username={"Sara Jhonsan"}
                  threadName={"Project List"}
                  onClickThread={() => {}}
                  isHighlighted={true}
                  timestamp={dayjs().subtract(2, "minute").toDate()}
                />
                <MentionedMessage
                  username={"Chiew Weng Keat"}
                  threadName={"User Group"}
                  onClickThread={() => {}}
                  isHighlighted={true}
                  timestamp={dayjs().subtract(23, "minute").toDate()}
                />
                <RequestMessage
                  username={"Fu Suan Huang"}
                  isHighlighted={false}
                  timestamp={dayjs().subtract(2, "hour").toDate()}
                  action={"delete"}
                />
                <ActionMessage
                  username={"Teo Tan Siang"}
                  isHighlighted={false}
                  timestamp={dayjs().subtract(1, "day").toDate()}
                  action={"uploaded"}
                />
              </section>
              <section className={styles.actionSection}>
                <Button className={styles.view}>VIEW ALL NOTIFICATIONS</Button>
              </section>
            </div>
          </Fade>
        </ClickAwayListener>
      )}
    </Popper>
  ) : null;
}
