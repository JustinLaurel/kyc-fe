"use client";
import styles from "./styles.module.scss";
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
          <div className={styles.logoHeader}>
            <Image
              src={"/assets/images/ambank_logo.png"}
              alt={"Ambank Logo"}
              width={364}
              height={95}
            />
            <div className={styles.header}>Universal KYC Onboarding</div>
          </div>
          <div className={styles.actionsHeader}>
            <div className={styles.summary}>
              <div className={styles.summaryName}>{"Welcome <Name>"}</div>
              <div className={styles.summaryRole}>Admin Approver</div>
            </div>
            <List
              className={styles.pointer}
              size={32}
              onClick={() => setIsSidebarOpen(true)}
              color="red"
              weight="fill"
            />
            <Bell
              className={styles.pointer}
              size={32}
              color="red"
              weight="regular"
            />
            <UserCircle
              className={styles.pointer}
              size={64}
              color="red"
              weight="thin"
            />
          </div>
        </section>
        <section
          className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ""}`}
        >
          <div className={styles.userInfo}>
            <div className={styles.wrapper}>
              <div className={styles.closeButton}>
                <X
                  size={22}
                  color="white"
                  weight="bold"
                  style={{ textAlign: "right", cursor: "pointer" }}
                  onClick={() => setIsSidebarOpen(false)}
                />
              </div>
              <div className={styles.username}>john99doe</div>
              <div className={styles.phone}>+6012xxxx123</div>
              <div className={styles.email}>john99doe@youremail.com</div>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.wrapper}>
              <SidebarButton
                ButtonIcon={ChartPieSlice}
                label={"Dashboard"}
                onClick={() => {}}
              />
              <SidebarButton
                ButtonIcon={UserGear}
                label={"User Management"}
                onClick={() => {}}
              />
              <SidebarButton
                ButtonIcon={Bell}
                label={"Notification"}
                onClick={() => {}}
              />
              <SidebarButton
                ButtonIcon={UserCircle}
                label={"My Profile"}
                onClick={() => {}}
              />
              <SidebarButton
                ButtonIcon={SignOut}
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
  ButtonIcon: typeof List;
  label: string;
  onClick: () => void;
}
function SidebarButton(props: SidebarButtonProps) {
  const { ButtonIcon, label, onClick } = props;
  return (
    <section className={styles.btn} onClick={() => onClick()}>
      <ButtonIcon className={styles.icon} size={34} weight="regular" />
      <div>{label}</div>
    </section>
  );
}
