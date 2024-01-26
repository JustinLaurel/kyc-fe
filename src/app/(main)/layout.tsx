"use client";
import { IconButton } from "@mui/material";
import styles from "./layout.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./layoutComponents/Sidebar";

interface Props {
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  const { children } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
                <IconButton>
                  <Image
                    src={"/assets/images/icon_bell.png"}
                    alt={"Notification Icon"}
                    width={20}
                    height={20}
                  />
                </IconButton>
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
