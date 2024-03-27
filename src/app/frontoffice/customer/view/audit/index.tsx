import { useParams } from "react-router-dom";
import ContentSection from "./ContentSection";
import HeaderSection from "./HeaderSection";
import styles from "./index.module.scss";

export default function FoCustomerViewAudit() {
  const { userId } = useParams();
  return (
    <main className={styles.mainContainer}>
      <HeaderSection />
      <ContentSection />
    </main>
  );
}
