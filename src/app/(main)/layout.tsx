"use client";
import styles from "./layout.module.scss";
import Image from "next/image";
import {
  List,
  Bell,
  UserCircle,
  X,
  ChartPieSlice,
  UserGear,
  SignOut,
} from "@phosphor-icons/react";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  const { children } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className={styles.body}>
        <section
          className={`${styles.dimmingOverlay} ${
            isSidebarOpen ? styles.active : ""
          }`}
          onClick={() => setIsSidebarOpen(false)}
        />
        <section className={styles.controlbar}>
          <div className={styles.logoSection}>
            <Image
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
                <Image
                  src={"/assets/images/icon_burger.png"}
                  alt={"Burger Icon"}
                  className={styles.pointer}
                  width={19}
                  height={15}
                  onClick={() => setIsSidebarOpen(true)}
                />
              </section>
              <section className={styles.item}>
                <Image
                  src={"/assets/images/icon_bell.png"}
                  alt={"Notification Icon"}
                  className={styles.pointer}
                  width={20}
                  height={20}
                />
              </section>
              <section className={styles.item}>
                <Image
                  src={"/assets/images/icon_user.png"}
                  alt={"User Icon"}
                  className={styles.pointer}
                  width={40}
                  height={40}
                />
              </section>
            </div>
          </div>
        </section>
        <section
          className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ""}`}
        >
          <div className={styles.userInfo}>
            <div className={styles.wrapper}>
              <div className={styles.closeButton}>
                <Image
                  src={"/assets/images/icon_close.png"}
                  alt={"Close sidebar"}
                  className={styles.pointer}
                  width={24}
                  height={24}
                  onClick={() => setIsSidebarOpen(false)}
                />
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
                onClick={() => {}}
              />
              <SidebarButton
                src="/assets/images/icon_user_management.png"
                darkSrc="/assets/images/icon_user_management_dark.png"
                label={"User Management"}
                onClick={() => {}}
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
                onClick={() => {}}
              />
              <SidebarButton
                src="/assets/images/icon_logout.png"
                darkSrc="/assets/images/icon_logout_dark.png"
                label={"Logout"}
                onClick={() => {}}
              />
            </div>
          </div>
        </section>
        <section className={styles.content}>{children}</section>
      </body>
    </html>
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
    <section
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
    </section>
  );
}
