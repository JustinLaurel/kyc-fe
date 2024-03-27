import React from "react";
import styles from "./index.module.scss";
import ActionButton from "../ActionButton";
import { ButtonSpecs } from "@/config/types";
import Tooltip from "@/components/Tooltip";

interface CardProps {
  children: React.ReactNode;
  subchildren?: React.ReactNode[];
  buttons?: ButtonSpecs[];
  header?: React.ReactNode | string;
  headerButton?: ButtonSpecs;
  headerTooltipMessage?: string;
  subheader?: React.ReactNode | string;
  className?: string;
  hasSeparator?: boolean;
  classes?: {
    container?: string;
    headerSection?: string;
    contentSection?: string;
    actionsSection?: string;
    headerButton?: string;
  };
}
export default function Card(props: CardProps) {
  const {
    children,
    subchildren,
    buttons,
    header = null,
    headerButton,
    headerTooltipMessage = null,
    subheader = null,
    className,
    hasSeparator = true,
    classes = {},
  } = props;

  return (
    <main
      className={
        styles.card +
        (className ? ` ${className}` : "") +
        (classes.container ? ` ${classes.container}` : "")
      }
    >
      {header && (
        <>
          <section
            className={
              styles.headerSection +
              (classes.headerSection ? ` ${classes.headerSection}` : "")
            }
          >
            <div className={styles.headerWrapper}>
              <div className={styles.header}>
                {header}
                {headerTooltipMessage && (
                  <Tooltip message={headerTooltipMessage} />
                )}
              </div>
              {subheader && <div className={styles.subheader}>{subheader}</div>}
            </div>
            {headerButton && (
              <ActionButton
                colorScheme={headerButton.colorScheme}
                className={
                  styles.headerButton +
                  (classes.headerButton ? ` ${classes.headerButton}` : "")
                }
                onClick={headerButton.onClick}
                isSubmit={headerButton.isSubmit}
              >
                {headerButton.label}
              </ActionButton>
            )}
          </section>
          {hasSeparator && <Separator />}
        </>
      )}

      {children && (
        <>
          <section
            className={
              styles.contentSection +
              (classes.contentSection ? ` ${classes.contentSection}` : "")
            }
          >
            {children}
          </section>
          {subchildren && hasSeparator && <Separator />}
        </>
      )}
      {subchildren &&
        subchildren.length > 0 &&
        subchildren.map((subchild, index) => (
          <React.Fragment key={index}>
            <section
              className={
                styles.contentSection +
                (classes.contentSection ? ` ${classes.contentSection}` : "")
              }
            >
              {subchild}
            </section>
            {index < subchildren.length - 1 && <Separator />}
          </React.Fragment>
        ))}

      {buttons && buttons.length && (
        <>
          {hasSeparator && <Separator />}
          <section
            className={
              styles.actionsSection +
              (classes.actionsSection ? ` ${classes.actionsSection}` : "")
            }
          >
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
