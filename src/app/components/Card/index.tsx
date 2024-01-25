import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";

interface CardProps {
  children: React.ReactNode;
  buttons?: {
    label: string;
    onClick: () => void;
    colorScheme: BUTTON_COLOR_SCHEMES;
  }[];
  header?: React.ReactNode | string;
  className?: string;
  hasSeparator?: boolean;
}
export default function Card(props: CardProps) {
  const {
    children,
    buttons,
    header = null,
    className,
    hasSeparator = true,
  } = props;

  return (
    <main className={styles.card + (className ? ` ${className}` : "")}>
      {header && (
        <>
          <section className={styles.headerSection}>{header}</section>
          {hasSeparator && <Separator />}
        </>
      )}

      <section className={styles.contentSection}>{children}</section>

      {buttons && buttons.length && (
        <>
          {hasSeparator && <Separator />}
          <section className={styles.actionsSection}>
            {buttons.map((button, index) => (
              <ActionButton
                key={index}
                colorScheme={button.colorScheme}
                onClick={() => button.onClick()}
              >
                {button.label}
              </ActionButton>
            ))}
          </section>
        </>
      )}
    </main>
  );
}

function Separator() {
  return <div className={styles.bottomSeparator}></div>;
}
