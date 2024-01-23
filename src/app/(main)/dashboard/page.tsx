import styles from "./page.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.role}></div>
          <div className={styles.greeting}></div>
          <div className={styles.logindt}></div>
        </div>
      </section>
      <section className={styles.taskSection}>
        <div className={styles.taskContainer}>
          <div className={styles.header}></div>
          <div className={styles.actionsContainer}></div>
        </div>
      </section>
    </div>
  );
}
