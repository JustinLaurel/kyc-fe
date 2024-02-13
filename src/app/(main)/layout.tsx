"use client";
import { IconButton } from "@mui/material";
import styles from "./layout.module.scss";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Sidebar from "./layoutComponents/Sidebar";
import NotificationDropdown from "./layoutComponents/NotificationDropdown";
import ProfileDropdown from "./layoutComponents/ProfileDropdown";
import MessageModal from "@/components/MessageModal";
import { useRouter } from "next/navigation";
import AmbankFooter from "@/components/AmbankFooter";
import { MODAL_TYPE } from "@/components/MessageModal/type";

interface Props {
  children: React.ReactNode;
}
export default function MainPageLayout(props: Props) {
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
    <main className={styles.mainLayoutContainer}>
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
                  draggable={false}
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
                  draggable={false}
                />
              </IconButton>
              <NotificationDropdown
                isOpen={isNotificationsDropdownOpen}
                handleClose={() => setIsNotificationsDropdownOpen(false)}
                handleViewAll={() => {
                  setIsNotificationsDropdownOpen(false);
                  router.push("/notification");
                }}
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
                  draggable={false}
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
      <AmbankFooter />

      <MessageModal
        type={MODAL_TYPE.YES_NO}
        isOpen={isLogoutNotificationOpen}
        handleNo={() => setIsLogoutNotificationOpen(false)}
        handleYes={() => {
          setIsLogoutNotificationOpen(false);
          router.push("/login");
        }}
        handleClose={() => setIsLogoutNotificationOpen(false)}
        message={"Are you sure you want to logout?"}
      />
    </main>
  );
}
