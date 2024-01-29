import Card from "@/components/Card";
import styles from "./page.module.scss";

export default function DetailSection() {
  return (
    <Card className={styles.infoSection} key={1}>
      <div className={styles.infoWrapper}>
        <div className={styles.role}>ADMIN MAKER</div>
        <div className={styles.detailsWrapper}>
          <div className={styles.greeting}>Good Morning, john99doe</div>
          <div className={styles.logindt}>Last Login: 07/12/2023 10:02:11</div>
        </div>
      </div>
    </Card>
  );
}
