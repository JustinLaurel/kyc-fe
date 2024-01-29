import styles from "./page.module.scss";
import TaskSection from "./TaskSection";
import DetailSection from "./DetailSection";

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <DetailSection />
      <TaskSection />
    </div>
  );
}
