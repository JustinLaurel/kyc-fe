import styles from "./index.module.scss";
import HeaderSection from "./HeaderSection";
import ContentSection from "./ContentSection";
import { useParams } from "react-router-dom";

export default function FoCustomerView() {
  const { userId } = useParams();
  console.log(`userId`, userId);
  return (
    <div className={styles.container}>
      <HeaderSection />
      <ContentSection />
    </div>
  );
}
