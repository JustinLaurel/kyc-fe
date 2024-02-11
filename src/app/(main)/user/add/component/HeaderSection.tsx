"use client";
import RouteSteps from "@/components/RouteSteps";
import styles from "./headersection.module.scss";

const routeItems = [
  {
    label: "User Management",
    onClick: () => {},
  },
  {
    label: "Add User",
  },
];

export default function HeaderSection() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.header}>Add User</div>
      <RouteSteps routeItems={routeItems} />
    </section>
  );
}
