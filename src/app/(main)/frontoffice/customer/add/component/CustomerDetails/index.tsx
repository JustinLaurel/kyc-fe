import styles from "./index.module.scss";
import CustomerDetailsFormWrapper from "./CustomerDetailsFormWrapper";

export default function CustomerDetails() {
  return (
    <main className={styles.customerDetailsContainer}>
      <CustomerDetailsFormWrapper />
    </main>
  );
}
