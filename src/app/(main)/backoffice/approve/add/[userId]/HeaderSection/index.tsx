"use client";
import RouteSteps from "@/components/RouteSteps";
import styles from "./index.module.scss";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Add New User",
  },
];

export default function HeaderSection() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.header}>Add New User</div>
      <RouteSteps routeItems={routeItems} />
    </section>
  );
}