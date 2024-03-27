import ContentSection from "./ContentSection";
import HeaderSection from "./HeaderSection";
import styles from "./index.module.scss";

export default function FoCustomer() {
  return (
    <main className={styles.mainContainer}>
      <HeaderSection />
      <ContentSection />
    </main>
  )
}
