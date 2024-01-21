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
