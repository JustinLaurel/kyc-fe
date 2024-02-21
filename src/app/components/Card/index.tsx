import React, { ReactElement } from "react";
import styles from "./index.module.scss";
import ActionButton, { BUTTON_COLOR_SCHEMES } from "../ActionButton";

interface CardProps {
  children: React.ReactNode;
  subchildren?: React.ReactNode[];
  buttons?: {
    label: string;
    onClick?: () => void;
    colorScheme?: BUTTON_COLOR_SCHEMES; // Defaults red. See ActionButton
    isSubmit?: boolean;
  }[];
  header?: React.ReactNode | string;
  subheader?: React.ReactNode | string;
  className?: string;
  hasSeparator?: boolean;
}
export default function Card(props: CardProps) {
  const {
    children,
    subchildren,
    buttons,
    header = null,
    subheader = null,
    className,
    hasSeparator = true,
  } = props;

  return (
    <main className={styles.card + (className ? ` ${className}` : "")}>
      {header && (
        <>
          <section className={styles.headerSection}>
            <div className={styles.header}>{header}</div>
            {subheader && <div className={styles.subheader}>{subheader}</div>}
          </section>
          {hasSeparator && <Separator />}
        </>
      )}

      {children && (
        <>
          <section className={styles.contentSection}>{children}</section>
          {subchildren && hasSeparator && <Separator />}
        </>
      )}
      {subchildren &&
        subchildren.length > 0 &&
        subchildren.map((subchild, index) => (
          <React.Fragment key={index}>
            <section className={styles.contentSection}>{subchild}</section>
            {index < subchildren.length - 1 && <Separator />}
          </React.Fragment>
        ))}

      {buttons && buttons.length && (
        <>
          {hasSeparator && <Separator />}
          <section className={styles.actionsSection}>
            {buttons.map((button, index) => (
              <ActionButton
                key={index}
                colorScheme={button.colorScheme}
                onClick={button.onClick}
                isSubmit={button.isSubmit}
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
