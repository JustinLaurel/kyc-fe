"use client";
import styles from "./layout.module.scss";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  const { children } = props;

  return (
    <html lang="en" style={{ height: "100%" }}>
      <body className={styles.body}>
        <section className={styles.controlbar}>
          <div className={styles.logoHeader}>
            <Image
              src={"/assets/images/logo_ambank.png"}
              alt={"Ambank Logo"}
              width={194}
              height={40}
            />
          </div>
          <div className={styles.actionsHeader}>
            <div className={styles.header}>Universal KYC Onboarding</div>
          </div>
        </section>
        <section className={styles.content}>{children}</section>
      </body>
    </html>
  );
}
