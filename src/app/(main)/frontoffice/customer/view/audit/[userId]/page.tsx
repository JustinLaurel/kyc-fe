import ContentSection from "./ContentSection";
import HeaderSection from "./HeaderSection";
import styles from "./page.module.scss";

export default function CustomerAuditPage() {
  return (
    <main className={styles.mainContainer}>
      <HeaderSection />
      <ContentSection />
    </main>
  );
}
