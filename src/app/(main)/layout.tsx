"use client";
import { IconButton } from "@mui/material";
import styles from "./layout.module.scss";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Sidebar from "./layoutComponents/Sidebar";
import NotificationDropdown from "./layoutComponents/NotificationDropdown";
import ProfileDropdown from "./layoutComponents/ProfileDropdown";
import Notification from "@/components/Notification";
import { BUTTON_COLOR_SCHEMES } from "@/components/ActionButton";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  const { children } = props;
  const anchorElement = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] =
    useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLogoutNotificationOpen, setIsLogoutNotificationOpen] =
    useState(false);
  const router = useRouter();

  function handleNotificationIconClick() {
    setIsNotificationsDropdownOpen((prevState) => !prevState);
  }

  function handleProfileIconClick() {
    setIsProfileDropdownOpen((prevState) => !prevState);
  }

  function handleMyProfileClick() {
    router.push("/myProfile");
    setIsProfileDropdownOpen(false);
  }

  function handleLogoutClick() {
    setIsLogoutNotificationOpen(true);
    setIsProfileDropdownOpen(false);
  }

  return (
    <html lang="en">
      <body className={styles.body}>
        <LogoutNotification
          isOpen={isLogoutNotificationOpen}
          handleNo={() => setIsLogoutNotificationOpen(false)}
          handleYes={() => {
            setIsLogoutNotificationOpen(false);
            router.push("/login");
          }}
          handleClose={() => setIsLogoutNotificationOpen(false)}
        />
        <section className={styles.controlbar}>
          <div className={styles.logoSection}>
            <Image
              priority
              src={"/assets/images/logo_ambank.png"}
              alt={"Ambank Logo"}
              width={194}
              height={40}
            />
          </div>
          <div className={styles.actionsSection}>
            <div className={styles.header}>Universal KYC Onboarding</div>
            <div className={styles.actions}>
              <section className={styles.summary}>
                <div className={styles.summaryName}>{"Welcome <Name>"}</div>
                <div className={styles.summaryRole}>Admin Approver</div>
              </section>
              <section className={styles.item}>
                <IconButton onClick={() => setIsSidebarOpen(true)}>
                  <Image
                    src={"/assets/images/icon_burger.png"}
                    alt={"Burger Icon"}
                    width={19}
                    height={15}
                  />
                </IconButton>
              </section>
              <section className={styles.item}>
                <IconButton onClick={handleNotificationIconClick}>
                  <Image
                    src={"/assets/images/icon_bell.png"}
                    alt={"Notification Icon"}
                    width={20}
                    height={20}
                  />
                </IconButton>
                <NotificationDropdown
                  isOpen={isNotificationsDropdownOpen}
                  handleClose={() => setIsNotificationsDropdownOpen(false)}
                  anchorElement={anchorElement?.current}
                />
              </section>
              <section className={styles.item}>
                <IconButton onClick={handleProfileIconClick}>
                  <Image
                    src={"/assets/images/icon_user.png"}
                    alt={"User Icon"}
                    className={styles.pointer}
                    width={40}
                    height={40}
                  />
                </IconButton>
                <ProfileDropdown
                  isOpen={isProfileDropdownOpen}
                  anchorElement={anchorElement?.current}
                  handleClose={() => setIsProfileDropdownOpen(false)}
                  handleMyProfileClick={handleMyProfileClick}
                  handleLogoutClick={handleLogoutClick}
                />
              </section>
              <div
                style={{ marginLeft: "-16px", marginTop: "96px" }}
                ref={anchorElement}
              ></div>
            </div>
          </div>
        </section>
        <section className={styles.content}>{children}</section>
        <Sidebar
          isOpen={isSidebarOpen}
          handleClose={() => setIsSidebarOpen(false)}
        />
      </body>
    </html>
  );
}

interface LogoutNotificationProps {
  isOpen: boolean;
  handleNo: () => void;
  handleYes: () => void;
  handleClose: () => void;
}
function LogoutNotification(props: LogoutNotificationProps) {
  const { isOpen, handleNo, handleYes, handleClose } = props;

  return (
    <Notification
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
      closeNotification={handleClose}
    >
      Are you sure you want to logout?
    </Notification>
  );
}
