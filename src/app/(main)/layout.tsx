"use client";
import { Box, Card, Fade, IconButton, Popper } from "@mui/material";
import styles from "./layout.module.scss";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Sidebar from "./layoutComponents/Sidebar";
import NotificationDropdown from "./layoutComponents/NotificationDropdown";

interface Props {
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  const { children } = props;
  const anchorElement = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] =
    useState(false);

  function handleNotificationsClick() {
    setIsNotificationsDropdownOpen((prevState) => !prevState);
  }

  return (
    <html lang="en">
      <body className={styles.body}>
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
                <IconButton onClick={handleNotificationsClick}>
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
                <IconButton>
                  <Image
                    src={"/assets/images/icon_user.png"}
                    alt={"User Icon"}
                    className={styles.pointer}
                    width={40}
                    height={40}
                  />
                </IconButton>
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
