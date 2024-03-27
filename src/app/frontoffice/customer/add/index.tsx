import ContentSection from "./ContentSection";
import HeaderSection from "./HeaderSection";
import styles from "./index.module.scss";

export default function FoCustomerAdd() {
  return (
    <main className={styles.mainContainer}>
      <HeaderSection />
      <ContentSection />
    </main>
  );
}
