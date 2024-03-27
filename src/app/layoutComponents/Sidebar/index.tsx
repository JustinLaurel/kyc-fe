import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { Backdrop, Button, IconButton } from "@mui/material";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}
export default function Sidebar(props: Props) {
  const navigate = useNavigate();
  const { isOpen, handleClose } = props;
  return (
    <>
      <Backdrop
        open={isOpen}
        className={styles.dimmingOverlay}
        onClick={handleClose}
      />
      <section className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
        <div className={styles.userInfo}>
          <div className={styles.wrapper}>
            <div className={styles.closeButton}>
              <IconButton onClick={handleClose}>
                <img
                  src={"/assets/images/icon_close.png"}
                  alt={"Close sidebar"}
                  width={24}
                  height={24}
                />
              </IconButton>
            </div>
            <section className={styles.infoSection}>
              <div className={styles.username}>john99doe</div>
              <section className={styles.phoneEmailWrapper}>
                <div className={styles.phone}>+6012xxxx123</div>
                <div className={styles.email}>john99doe@youremail.com</div>
              </section>
            </section>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.wrapper}>
            <SidebarButton
              src="/assets/images/icon_dashboard.png"
              darkSrc="/assets/images/icon_dashboard_dark.png"
              label={"Dashboard"}
              onClick={() => {
                navigate("/frontoffice");
                handleClose();
              }}
            />
            <SidebarButton
              src="/assets/images/icon_user_management.png"
              darkSrc="/assets/images/icon_user_management_dark.png"
              label={"User Management"}
              onClick={() => {
                navigate("/backoffice/make");
                handleClose();
              }}
            />
            <SidebarButton
              src="/assets/images/icon_notification.png"
              darkSrc="/assets/images/icon_notification_dark.png"
              label={"Notification"}
              onClick={() => {
                navigate("/notification");
                handleClose();
              }}
            />
            <SidebarButton
              src="/assets/images/icon_my_profile.png"
              darkSrc="/assets/images/icon_my_profile_dark.png"
              label={"My Profile"}
              onClick={() => {
                navigate("/myProfile");
                handleClose();
              }}
            />
            <SidebarButton
              src="/assets/images/icon_logout.png"
              darkSrc="/assets/images/icon_logout_dark.png"
              label={"Logout"}
              onClick={() => {
                navigate("/login");
                handleClose();
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

interface SidebarButtonProps {
  src: string;
  darkSrc?: string;
  label: string;
  onClick: () => void;
}
function SidebarButton(props: SidebarButtonProps) {
  const { src, darkSrc = null, label, onClick } = props;

  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      className={styles.btn}
      onClick={() => onClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered && darkSrc ? darkSrc : src}
        alt={label}
        width={20}
        height={20}
        color={"black"}
      />
      <div className={styles.label}>{label}</div>
    </Button>
  );
}
