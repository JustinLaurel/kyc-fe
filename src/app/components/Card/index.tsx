import React from "react";
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
}
export default function Card(props: CardProps) {
  const { buttons, header = null } = props;

  return (
    <main className={styles.card}>
      {header && (<section className={styles.headerSection}>{header}</section>)}
      <section className={styles.contentSection}>{props.children}</section>
      {buttons && buttons.length && (
        <section className={styles.actionsSection}>
          {buttons.map((button, index) => (
            <ActionButton
              key={index}
              label={button.label}
              colorScheme={button.colorScheme}
              onClick={() => button.onClick()}
            />
          ))}
        </section>
      )}
    </main>
  );
}
