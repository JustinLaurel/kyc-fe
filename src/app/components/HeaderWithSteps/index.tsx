"use client";
import RouteSteps from "@/components/RouteSteps";
import styles from "./index.module.scss";
import { ButtonSpecs } from "@/config/types";
import ActionButton from "../ActionButton";

interface RouteItem {
  label: string;
  onClick?: () => void;
}
interface HeaderStandardProps {
  routeItems?: RouteItem[];
  label: string;
  button?: ButtonSpecs;
}
export default function HeaderStandard(props: HeaderStandardProps) {
  const { routeItems, label, button } = props;

  return (
    <section className={styles.headerWithSteps}>
      <div className={styles.leftSection}>
        <div className={styles.headerText}>{label}</div>
        {routeItems && <RouteSteps routeItems={routeItems} />}
      </div>
      {button && (
        <ActionButton
          className={styles.headerButton}
          onClick={button.onClick}
          isSubmit={button.isSubmit}
          colorScheme={button.colorScheme}
        >
          {button.label}
        </ActionButton>
      )}
    </section>
  );
}
