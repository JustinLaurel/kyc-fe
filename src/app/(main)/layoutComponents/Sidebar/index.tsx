import { useRouter } from "next/navigation";
import styles from "./index.module.scss";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}
export default function Sidebar(props: Props) {
  const router = useRouter();
  const { isOpen, handleClose } = props;
  return (
    <>
      <section
        className={`${styles.dimmingOverlay} ${
          isOpen ? styles.active : ""
        }`}
        onClick={handleClose}
      />
      <section className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
        <div className={styles.userInfo}>
          <div className={styles.wrapper}>
            <div className={styles.closeButton}>
              <IconButton onClick={handleClose}>
                <Image
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
                router.push("/dashboard");
                handleClose();
              }}
            />
            <SidebarButton
              src="/assets/images/icon_user_management.png"
              darkSrc="/assets/images/icon_user_management_dark.png"
              label={"User Management"}
              onClick={() => {
                router.push("/user");
                handleClose();
              }}
            />
            <SidebarButton
              src="/assets/images/icon_notification.png"
              darkSrc="/assets/images/icon_notification_dark.png"
              label={"Notification"}
              onClick={() => {}}
            />
            <SidebarButton
              src="/assets/images/icon_my_profile.png"
              darkSrc="/assets/images/icon_my_profile_dark.png"
              label={"My Profile"}
              onClick={() => {
                router.push("/myProfile");
                handleClose();
              }}
            />
            <SidebarButton
              src="/assets/images/icon_logout.png"
              darkSrc="/assets/images/icon_logout_dark.png"
              label={"Logout"}
              onClick={() => {
                router.push("/login");
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
      <Image
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
