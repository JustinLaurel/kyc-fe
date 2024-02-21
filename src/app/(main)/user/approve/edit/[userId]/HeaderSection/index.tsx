"use client";
import RouteSteps from "@/components/RouteSteps";
import styles from "./index.module.scss";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Update User",
  },
];

export default function HeaderSection() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.header}>Update User</div>
      <RouteSteps routeItems={routeItems} />
    </section>
  );
}
